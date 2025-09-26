document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const commandInput = document.getElementById('commandInput');
    let commandHistory = [];
    let historyIndex = -1;

    // Initialize the terminal
    function initTerminal() {
        commandInput.value = '';
        commandInput.focus();
        
        // Add click handler to focus input when clicking anywhere in the terminal
        terminal.addEventListener('click', () => {
            commandInput.focus();
        });
    }

    // Add a new line to the terminal
    function addLine(text, className = '', isHTML = false) {
        const line = document.createElement('div');
        line.className = className;
        if (isHTML) {
            line.innerHTML = text;
        } else {
            line.textContent = text;
        }
        terminal.insertBefore(line, document.querySelector('.input-line'));
        terminal.scrollTop = terminal.scrollHeight;
    }

    // Process the command
    function processCommand(command) {
        if (!command.trim()) return;

        // Add command to history if it's different from the last command
        if (commandHistory[commandHistory.length - 1] !== command) {
            commandHistory.push(command);
            historyIndex = commandHistory.length;
        }

        // Display the command
        addLine(`user@aadityashah.com:~$ ${command}`, 'command-output');

        // Process the command
        const [cmd, ...args] = command.trim().split(' ');
        const cmdLower = cmd.toLowerCase();

        switch (cmdLower) {
            case 'help':
                showHelp();
                break;
            case 'about':
                showAbout();
                break;
            case 'resume':
                showResume();
                break;
            case 'links':
                showLinks();
                break;
            case 'contact':
                showContact();
                break;
            case 'clear':
                clearTerminal();
                return; // Skip adding new input line
            default:
                addLine(`Command not found: ${cmd}. Type 'help' to see available commands.`, 'error');
        }

        // Add new input line
        addInputLine();
    }

    // Command handlers
    function showHelp() {
        const helpText = `
Available commands:
  <span class="command-name">about</span>     <span class="command-description">- Learn more about me</span>
  <span class="command-name">resume</span>    <span class="command-description">- View my professional resume</span>
  <span class="command-name">links</span>     <span class="command-description">- Find me on the web</span>
  <span class="command-name">contact</span>   <span class="command-description">- Get in touch</span>
  <span class="command-name">clear</span>     <span class="command-description">- Clear the terminal</span>
  <span class="command-name">help</span>      <span class="command-description">- Show this help message</span>
`;
        addLine(helpText, 'command-output', true);
    }

    function showAbout() {
        const aboutText = `
👋🏾 <strong>Hello!</strong> I'm Aaditya Shah, but most people call me AJ. 

I'm a passionate <strong>geek 🤓</strong> with expertise in web technologies. For the past almost decade, I have been working with SaaS and PaaS companies to further their Customer Success, Enablement, and Adoption.
I have worked with companies like <a href="https://acquia.com" target="_blank">Acquia</a>, <a href="https://vercel.com" target="_blank">Vercel</a>, <a href="https://mabl.com" target="_blank">Mabl</a>, <a href="https://cloudflare.com" target="_blank">Cloudflare</a>, and more.

I love creating efficient, scalable, and user-friendly applications and implementations.

Skills: JavaScript, React, Node.js, Python, PHP, mySQL, Cybersecurity, and much much more. I am a forever student, learning and evolving.
`;
        addLine(aboutText, 'command-output', true);
    }

    function showResume() {
        const resumeText = `
[Senior Technical Account Manager]
Cloudflare - 2024 to Present

[Technical Account Manager]
mabl - 2023 to 2024

[Senior Lead Technical Account Manager]
Acquia - 2022 to 2023

[Manger, Customer Success Managers - AMER]
Vercel - 2021 to 2022

[Technical Account Manager]
Acquia - 2019 to 2021

[Senior Lead Web Developer]
North Carolina Supreme Court System - 2018 to 2019

[Senior Lead Developer]
U.S. House of Representatives - 2016 to 2018

Education:
- B.S. in Information Technology, Rochester Institute of Technology, 2010
`;
        addLine(resumeText, 'command-output', true);
    }

    function showLinks() {
        const linksText = `
Find me on:
- GitHub:   <a href="https://github.com/aadityajshah" target="_blank">https://github.com/aadityajshah</a>
- LinkedIn: <a href="https://linkedin.com/in/aadityajshah" target="_blank">https://linkedin.com/in/aadityajshah</a>
`;
        addLine(linksText, 'command-output', true);
    }

    function showContact() {
        const contactText = `
You can reach me at:
- Email: <a href="mailto:hello@aadityashah.com">hello@aadityashah.com</a>
- LinkedIn: <a href="https://linkedin.com/in/aadityajshah" target="_blank">https://linkedin.com/in/aadityajshah</a>
`;
        addLine(contactText, 'command-output', true);
    }

    function clearTerminal() {
        const lines = document.querySelectorAll('.command-output, .welcome-message');
        lines.forEach(line => line.remove());
        commandInput.value = '';
        addInputLine();
    }

    // Add a new input line
    function addInputLine() {
        const inputLine = document.createElement('div');
        inputLine.className = 'input-line';
        inputLine.innerHTML = `
            <span class="prompt">user@aadityashah.com:~$</span>
            <input type="text" class="command-input" autofocus autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" inputmode="text">
            <span class="cursor">█</span>
        `;
        
        // Remove existing input line
        const existingInputLine = document.querySelector('.input-line');
        if (existingInputLine) {
            terminal.replaceChild(inputLine, existingInputLine);
        } else {
            terminal.appendChild(inputLine);
        }

        const newInput = inputLine.querySelector('input');
        newInput.focus({ preventScroll: true });
        // Ensure the latest input line is visible, especially on mobile keyboards
        try {
            inputLine.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } catch (_) {
            terminal.scrollTop = terminal.scrollHeight;
        }
        
        // Set up event listeners for the new input
        setupInputListeners(newInput);
    }

    // Set up event listeners for input
    function setupInputListeners(inputElement) {
        inputElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const command = inputElement.value.trim();
                if (command) {
                    processCommand(command);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (commandHistory.length > 0 && historyIndex > 0) {
                    historyIndex--;
                    inputElement.value = commandHistory[historyIndex] || '';
                    // Move cursor to end of input
                    setTimeout(() => {
                        inputElement.selectionStart = inputElement.selectionEnd = inputElement.value.length;
                    }, 0);
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    inputElement.value = commandHistory[historyIndex] || '';
                } else {
                    historyIndex = commandHistory.length;
                    inputElement.value = '';
                }
                // Move cursor to end of input
                setTimeout(() => {
                    inputElement.selectionStart = inputElement.selectionEnd = inputElement.value.length;
                }, 0);
            }
        });
    }

    // Initialize the terminal
    initTerminal();
    setupInputListeners(commandInput);
});
