# Practice more

Practice receiving more.

To practice the code (recording of leetcode), we can learn from other people's methods and have our own ideas to record what we have learned.

Persist every day, accumulate every day.

# About debug

To create a launch.json file, open your project folder in VS Code (File > Open Folder) and then select the Configure gear icon on the Debug view top bar.
![](https://code.visualstudio.com/assets/docs/editor/debugging/launch-configuration.png)

Here is the launch configuration generated for Node.js debugging:

    {
        // Use intelliSense to learn about possible Node.js debug attribute。 
        // Hover to view descriptions of existing attributes。
        // For more information，visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "启动程序",
                "skipFiles": [
                    "<node_internals>/**"
                ],
                "program": "${file}",
            }
        ]
    }

The following predefined variables are supported:

- ${workspaceFolder} - the path of the folder opened in VS Code
- ${workspaceFolderBasename} - the name of the folder opened in VS Code without any - slashes (/)
- ${file} - the current opened file
- ${relativeFile} - the current opened file relative to workspaceFolder
- ${relativeFileDirname} - the current opened file's dirname relative to workspaceFolder
- ${fileBasename} - the current opened file's basename
- ${fileBasenameNoExtension} - the current opened file's basename with no file extension
- ${fileDirname} - the current opened file's dirname
- ${fileExtname} - the current opened file's extension
- ${cwd} - the task runner's current working directory on startup
- ${lineNumber} - the current selected line number in the active file
- ${selectedText} - the current selected text in the active file
- ${execPath} - the path to the running VS Code executable
- ${defaultBuildTask} - the name of the default build task

# Reference

[Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference)

[Debugging](https://code.visualstudio.com/docs/editor/debugging#_automatically-open-a-uri-when-debugging-a-server-program)