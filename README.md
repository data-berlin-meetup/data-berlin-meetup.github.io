# Data Berlin Meetup Website

This is the official website for the Data Berlin Meetup organization, built with [Hugo](https://gohugo.io/), a fast and modern static site generator.

## Features

- 🚀 Fast and modern static site generation
- 📝 Easy content management with Markdown
- 📅 Automated event listings
- 📱 Responsive design
- 🔍 SEO optimized
- 🌐 Multi-language support (if needed)
- 🔄 Continuous Deployment with GitHub Actions

## Setup Instructions

1. Install Hugo (extended version):
```bash
# On macOS
brew install hugo

# On Windows
choco install hugo-extended

# On Linux
sudo apt-get install hugo
```

2. Clone this repository:
```bash
git clone https://github.com/data-berlin-meetup/data-berlin-meetup.github.io.git
cd data-berlin-meetup.github.io
```

3. Install the theme:
```bash
git submodule add https://github.com/meetup/hugo-theme-meetup.git themes/hugo-theme-meetup
```

4. Start the development server:
```bash
hugo server -D
```

## Project Structure

```
data-berlin-meetup.github.io/
├── config.toml          # Site configuration
├── content/            # Content in Markdown
│   ├── events/        # Event pages
│   ├── blog/          # Blog posts
│   └── _index.md      # Homepage content
├── static/            # Static assets
│   ├── images/        # Images
│   └── css/           # Custom CSS
└── themes/            # Hugo themes
```

## Adding Content

### Events
Create a new event by adding a Markdown file in `content/events/`:
```bash
hugo new events/YYYY-MM-DD-event-title.md
```

### Blog Posts
Create a new blog post:
```bash
hugo new blog/post-title.md
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. Just push your changes to the main branch.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
