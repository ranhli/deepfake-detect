
# RAIDAR AI Generated Text and Audio Detection Demo

Link to paper: https://arxiv.org/abs/2401.12970

This repository hosts the AI Detection Demo Page, designed to showcase the capabilities of the "Raidar" system developed by Columbia Researchers. This interactive web demo focuses on distinguishing between human-generated and AI-generated texts, including code, highlighting potential applications and ethical considerations.

## Overview

The AI Detection Demo Page provides an interactive interface for demonstrating the research conducted on AI-generated text detection. It features two main demonstrations: voice detection and text detection, which help users understand the technology's ability to discern human from machine-generated content.

## Prerequisites
Before running this application, you will need:

- Node.js installed on your machine.
- A Gmail account for sending emails (or modify the transporter configuration for another email service provider).


## Features

- **Research Overview**: Introduces the Raidar system, its purpose, and the underlying challenges with LLMs (Large Language Models).
- **Interactive Demos**:
  - **Voice Detection**: Demonstrates the detection of AI-generated voices.
  - **Text Detection**: Focuses on identifying AI-generated text and code.
- **Ethical Disclosure**: Details the ethical use and the intended academic purpose of the Raidar system.
- **Contact Form**: Allows users to reach out for further information or to engage with the research team directly.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-detection-demo.git
cd ai-detection-demo
```

2. Navigate to the project directory:
```bash
cd your-repository
```

## Configuration

You need to configure the email settings in the `app.js` file to use your email credentials:

1. Open `app.js`.
2. Modify the `auth` object in the Nodemailer transporter configuration:

`javascript
auth: {
user: 'your-email@gmail.com',
pass: 'your-passcode'
}`


**Important**: For Gmail, ensure that "Less secure app access" is enabled in your Google account settings, or use OAuth2 authentication for better security.
Alternatively, generate a passcode from https://myaccount.google.com/apppasswords?pli=1&rapt=AEjHL4N9_4SBSSwQUQz8EJOX5D2WWExAYJ7ZOxghY6MVZ-nb_vl1fSVALW8SEeIMfM5MZ2QXPZzf9z1HEBzex7TJn--Ba5f21HVnywbm6Gt21oisHAK3qhY

## Running the Server

To start the server, run:
```bash
npm start
```
This will start the server on `http://localhost:3000`. Navigate to this URL in a web browser to view the contact form.

## How to Use

Navigate through the page using the buttons provided to switch between the voice and text detection demos:

- **Voice Detection Demo**: Click on the "Voice Detection Demo" button.
- **Text Detection Demo**: Click on the "Text Detection Demo" button.

The results and functionality of each demo are displayed within iframes sourced from external URLs, showcasing real-time detection capabilities.

## Contributing

Contributions to this project are welcome. To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.





