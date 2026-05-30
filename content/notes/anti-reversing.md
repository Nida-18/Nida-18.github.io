---
title: "Introduction to Anti Reversing"
date: "2026-05-29"
tags: 
- Malware Analysis
- Cyber security 
- Defensive security"
---

# What is Anti Reversing?
Process of making an application immune to reversing. 

> Note: It is never possible to completely prevent reversing. What can be done is obstruct and hinder the process of reversing so that the attacker and the methods get worn out.
> So if your attacker is super motivated, it gets harder to prevent the system from being reversed.

## Do we Perform anti reversing on all application?
Any application whose users are outside the developing zone and is not open source, should be considered for addition of an anti reversing layer of security. 

Even though not all applications are worth the effort, since some contain such simple code, that is becomes easier to write it than reverse, it's still a good security habit to take each application into consideration. 

Some application, on the other hand, have high requirement for such anti reversing layer due to its crucial functioning. Such as, Copy Prevention Software, protection of core logic and method of functioning for such software is of high importance. 

Software development platform encourage some form of anti-reversing measures, to prevent conversion of application to near source code representation. This is true for bytecode based platforms such as Java and .NET, which results in high code obfuscators for such platforms. 

> Software development platforms manage entire code development life-cycle, which is usually cloud managed or enterprise level managed. Example: Github Platform, Azure Devops etc 

> Bytecode is an intermediate code generated once source code is compiled, which is executed on a virtual machine instead of CPU.

> Obfuscator is a tool that reduces the readability of a program by modifying or eliminating few information from it.

# Some Approaches to anti-reversing
1. Eliminating Symbolic information
*Non Bytecode based compiled program*: Strip all symbolic information from the program executable.

*Bytecode based programs*: Internal Symbolic information such as class names, class member names and names of initiated global objects, must be eliminated from programs.

2. Obfuscating the program
Generic name for a number of techniques that reduces static analysis possibilities on a program. This is done by modifying:
- program's layout
- logic
- data 
and organised such that it becomes far less readable while keeping identical functionality.
 
3. Embedding Antidebugger code
Intentionally perform operations within program that damage or disable a debugger, if one is attached. Some of these are simply detecting presence of debugger and terminating the program.

## Eliminating Symbolic information
Compiler based programs - non issue since the release builds do not contain symbolic information. However, the one place little bit of presence is import and export tables. If large number of DLLs exist, they export large number of function, the names of all those could facilitate reversing. To prevent this, it would be preferred to export all function by ordinals rather than by names. 
Byte code programs - All internal names are preserved once compiled. Here strings cant be just eliminated, they must be instead replaced with other strings, so that internal cross references are not damaged. Strategy -> Have a program go over the executable and rename all internal names to meaningless strings.

## Code Encryption
Encrypting the program after it's compiled and embedding the decryption code within the executable. However, this approach only creates inconvenience to the reverser, since the decryption logic as well as the decryption key is required to be within the executable and the same is to automatically employed once execution begins.

In most cases, encrypted packets can be programmatically decrypted using special unpacker programs and can automatically find the key and decrypt the program. They typically create a new executable that contains the original program minus the encryption.

To prevent unpacking, hide the key within the program. Which can be done by using key that is calculated during runtime. Using a large number of global variable and complex mathematical function at each point to decrypt.

## Active Anti-debugger techniques
Techniques are particularly more effective once combined with code encryption, since encryption forces reverser to use a debugger. 
Anti-debugger tricks are also little risky, since it can give false positives and cause improper execution in genuine usages.

### Debugger Basics
*Breakpoint working* 
  When Breakpoint is set, debugger replaces that instruction with an `int 3` instruction. This is a special interrupt, which notifies debugger that breakpoint is reached. Once that happens, debugger replaces it with the original code and pauses the execution for analysis.

*Hardware Breakpoint*
  Breakpoint that the processor itself manages. It simply knows when a specific memory address is accessed.

Once a breakpoint is hit, user usually step through the code in order to analyse it. Which means single instruction is executed. On IA-32 processor, trap flag (TF) in the EFLAGS register is used. This generates interrupt after each executed instruction.

### IsDebuggerPresent API 
Windows API that can be used to detect user mode debuggers such as OllyDbg and WinDbg. It accesses the current process's Program Environment Block to determine the same. 
However, usage of this is not very effective since its very easy to detect as the name leaves no place for doubt. 

Another approach is to implement it intrinsically, within the program code.

`mov eax,fs:[00000018]` \
`mov eax, [eax+0x30` \
`cmp byte ptr [eax+0x2], 0` \
`je RunProgram` \
`; Inconspiciously terminate program here...`

Disadvantage: assumes two internal offsets in NT data structure wont change in future releases of the OS.

*Offset +30 from Thread Environment Block DS which points to current process's PEB*

*Byte at offset +2 which indicates whether debugger is present or not.*

Also, this implementation would require the ability for the assembly code to be incorporated into the program.

### SystemKernelDebuggerInformation
*NTQuerySystemInformation* is a native API to determine if a kernel debugger is attached.
Supports different types of information requests, one such is *SystemKernelDebuggerInformation*, which obtains information from the kernel if debugger is attached.

`ZwQuerySystemInformation(SystemKernelDebuggerInformation, (PVOID) &DebuggerInfo, sizeof(DebuggerInfo), &ulReturnedLength);`

Data structure returned by the SystemKernelDebuggerInformation request:

`tyepedef struct _SYSTEM_KERNEL_DEBUGGER_INFORMATION(` \
  `BOOLEAN DebuggerEnabled;` \
  `BOOLEAN DebuggerNotPresent;` \
`) _SYSTEM_KERNEL_DEBUGGER_INFORMATION, ` \
`* PSYSTEM_KERNEL_DEBUGGER_INFORMATION;`

Only serial connection debugger such as KD or WinDbg will be detected.

### Detecting SoftICE using single step interrupt
Reversing NuMega SoftICE. Since SoftICE uses `int 1` for  single stepping through program, trick is to set up own handler for it in *interrupt descriptor table*. The program installs an exception handler and invokes `int 1`, if exception code is anything but the conventional access violation exception, SoftICE is running.

### The trap flag
Enabling the trap flag in current process and check whether an execution is raised. If not, it can be assumed that the debugger has 'swallowed' it and the program is being traced.
This detects all kinds of debuggers.

### Code Checksums
Pre-calculate a checksum for functions within the program and have the function randomly check if modification has occurred. 
However, its operationally expensive.

This don't detect or prevent hardware breakpoints, because they don't modify the program code.

# Confusing Disassemblers
In processor architectures that use variable length instruction, such as IA-32 processors, disassemblers can be tricked into incorrectly treating invalid data as the beginning of an instruction.

Consider the following inline assembler sequence:

`_asm` \
`{` \
`Some Code ...` \
`jmp After` \
`After: ` \
`mov eax, [SomeVariable]` \
`push eax` \
`call AFunction` \
`}`

Memory code:

Address    Bytes \

`40101D     EB 01` \
`40101F     0F` \
`401020     8B 45 FC` \
`401023     50` \
`401024     E8 D7 FF FF FF` 

## Linear Sweep Disassemblers
Disassembles instruction sequentially in the entire module.

NuMega SoftICE Outputs as follows:\
`0040101D  JMP     00401020` \
`0040101F  JNP     E8910C6A` \
`00401025  XLAT` \
`00401026  INVALID` \
`00401028  JMP    FAR [EAX-24]` \
`0040102B  PUSHAD` \
`0040102C  INC    EAX`

This disassembler is completely baffled by the junk byte (0F).

### Why 0x0F?
In x86 assembly, 0F is usually a prefix byte that begins a two byte instruction
So once debugger encounters 0F, it expects another byte after it.

### What SoftICE sees?
Instruction one: EB -> Jump short (jump to near location using 1-byte signed offset)
               &nbsp;  01 -> 1 Byte jump
               &nbsp;  Current position + offset
              &nbsp;   40101F + 1 = 401020
              &nbsp;  **JMP 401020**
Instruction two: 0F -> start of 2 Byte opcode

Hence, SoftICE grabs *0F 8B* as second instruction
            &nbsp;  8B -> JNP
             &nbsp; Since JNP takes 6 Bytes
             &nbsp; 8B 45 FC 50 E8 is taken as one giant instruction
             &nbsp; **JNP XXXXXX**

Once one instruction line is messed up, a domino effect takes over, and the entire module is wrongly disassembled.

## Recursive Traversal Disassemblers
Instructions are analyzed by traversing instruction while following the control flow.

OllyDbg Outputs as follows:\
`0040101D EB 01       JMP SHORT disasmtest.0040120` \
`004010F  0F          DB 0F` \
`00401020 8B45 FC     MOV EAX, DWORD PTR SS:[EBP-4]` \
`00401023 50          PUSH EAX` \
`00401024 E8 D7FFFFFF CALL disasmtest.401000`

Previous trick fails here, as it correctly disassembles, since it follows the execution order. 

### Using conditional jump
Instead of \
`jmp After` \
we use:\
`mov eax,2` \
`cmp eax, 2` \
`je After` 

At run time: 2==2, so jump is always taken
However, disassembler doesn't execute the code. It only sees `je After`; which means Maybe jump, Maybe don't jump, hence two possible paths:

`mov eax,2` \
`cmp eax, 2` \
`je After`  \
`_emit 0x0F` \
`After: ` \
`mov eax, [SomeVariable]` \
`push eax` \
`call AFunction` 

Disassembler sees:
Branch 1: Jump taken \
     &nbsp;     `After: ` \
        &nbsp;  `mov eax, [SomeVariable]` \
       &nbsp;   `push eax` \
       &nbsp;   `call AFunction` 
       &nbsp;   All okay

Branch 2: Jump not taken \
         &nbsp; Encounters x0F
         &nbsp; Tries decoding as **0F 8B 45 FC 50 E8**
        &nbsp;  Leading to garbage output

Disassembler is not confused as to which path is real. It may display junk path as code.

### Opaque Predicate?
Condition whose result is easily known to programmers but difficult for disassembler to determine.

Complex predicates are used.

`imul eax,7` \
`xor eax,12345678h` \
`rol eax,5` \
`cmp eax,0AABBCCDDh` 
