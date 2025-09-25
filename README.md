# Terminal Portfolio

A terminal-style portfolio website that can be deployed on Cloudflare Pages.

## Features

- Terminal-like interface with command input
- Responsive design that works on desktop and mobile
- Command history with up/down arrow navigation
- Available commands:
  - `about` - Learn more about me
  - `resume` - View my professional resume
  - `links` - Find me on the web
  - `contact` - Get in touch
  - `clear` - Clear the terminal
  - `help` - Show available commands

## Local Development

1. Clone the repository
2. Open `index.html` in your browser

## Deploying to Cloudflare Pages

1. Push your code to a GitHub or GitLab repository
2. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/)
3. Go to Pages > Create a project
4. Connect your Git provider and select your repository
5. Configure the build settings:
   - Project name: Your project name
   - Production branch: `main` (or your preferred branch)
   - Build command: (leave empty)
   - Build output directory: (leave empty)
   - Root directory: (leave empty if files are in the root)
6. Click "Save and Deploy"

Your site will be live at `https://<project-name>.pages.dev`

## Customization

1. Update the content in `script.js` to include your personal information
2. Modify colors and styling in `styles.css`
3. Add or modify commands in the `processCommand` function in `script.js`

## License

MIT
