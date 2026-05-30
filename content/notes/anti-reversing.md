---
title: "Introduction to Anti Reversing"
date: "2026-05-29"
tag: Malware Analysis, Defensive Security, Cyber Security
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

