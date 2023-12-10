# openai-module

This project is a NestJS application that generates images based on given images using the OpenAI API. It includes functionality to describe images, refine prompts, and create combined images with additional random features.

## Getting Started

### Prerequisites

- NestJS installed on your system.
- An active OpenAI API key.

### Installation

1. **Clone the Repository**

   Clone this repository to your local machine using `git clone`.

2. **Install Dependencies**

   Navigate to the project directory and run the following command to install the necessary Node.js dependencies:

```sh
npm install
```

3. **Set Up Environment Variables**

Create a `.env` file by doing a 

```sh
mv .env.example .env
```

in the root directory of the project and add your OpenAI API key as follows:

OPENAPI_API_KEY=your_openai_api_key

Replace `your_openai_api_key` with your actual OpenAI API key.

### Usage

1. **Run the Application**

Use the following command to start the application:

```sh
npm start
```

2. **Test the Application**

```sh
npm test
```

### Notes

- The OpenAI API key must be valid and have the necessary permissions for image generation and description.

## License

This project is open-source and available under the [MIT License](LICENSE).