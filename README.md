## Next.js App with Google Sign-In and Protected Routes

First, run the development server:

Welcome to the GitHub repository for our cutting-edge application built with Next.js 14, designed to streamline user authentication and secure access management using NextAuth for Google Sign-In. Our application exemplifies modern web development practices, ensuring both efficiency and security.

## Overview

This application is a demonstration of integrating Google Sign-In with Next.js, leveraging the power of NextAuth for a seamless authentication experience. It's designed for developers looking for a robust authentication solution and for those aiming to understand the practical implementation of protected routes in a Next.js application.

## Features

- Google Sign-In: Users can sign in effortlessly using their Google accounts, thanks to NextAuth's seamless integration. This not only simplifies the login process but also enhances security by utilizing Google's authentication infrastructure.
- Protected Routes: We've implemented a robust mechanism to protect certain areas of the application, such as the dashboard. Unauthorized users attempting to access these areas are automatically redirected to the sign-in page, ensuring that sensitive information remains secure.


## Getting Started

To get started with this project, clone the repository to your local machine. You'll need to have Node.js installed to run the application. Follow these steps to set up and start the application:

1. Clone the Repository: Clone this repository to your local machine using Git commands or by downloading the ZIP file.
2. Install Dependencies: Navigate to the project directory and run npm install to install the required dependencies.
3. Configure NextAuth: Set up your Google credentials and configure NextAuth for Google Sign-In. You'll need to create a .env.local file in the root of the project and add your Google client ID and secret.
4. Run the Development Server: Execute npm run dev to start the development server. Open http://localhost:3000 to view the application in your browser.
