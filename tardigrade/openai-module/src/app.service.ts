import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { configDotenv } from 'dotenv';
configDotenv();

@Injectable()
export class AppService {
  // Your additional features array

  /**
   * Creates a combined image based on descriptions of two images and an additional random feature.
   * @param {string} image1 - The base64 of the first image.
   * @param {string} image2 - The base64 of the second image.
   * @param {string[]} _additionalFeature - An array of additional features to include in the image.
   */
  async createCombinedImage(
    image1: string,
    image2: string,
    _additionalFeature: string,
  ): Promise<any> {
    const description1 = await this.describeImage(image1);
    const description2 = await this.describeImage(image2);

    const mergedPrompt = `${description1} ${description2} Add an additional element of ${_additionalFeature} to the scene.`;

    const refinedPrompt = await this.refinePrompt(mergedPrompt);

    const createdImage = await this.createImage(refinedPrompt);

    return createdImage;
  }

  // Setup OpenAI with API key from environment variable
  openai = new OpenAI({ apiKey: process.env.OPENAPI_API_KEY });

  /**
   * Generates an image based on a given prompt using OpenAI's API.
   * @param {string} prompt - The prompt describing the image to generate.
   */
  async createImage(prompt: string) {
    console.log('creating image...');
    try {
      const response = await this.openai.images.generate({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1024x1024',
      });

      console.log('createImage: ', response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Describes an image by returning a text description using OpenAI's vision API.
   * @param {string} filePath - The path to the image file.
   * @returns {Promise<string>} A promise that resolves to the description of the image.
   */
  async describeImage(base64Image: string): Promise<string> {
    console.log('describing image...');
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'What is in this image?' },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/png;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    });

    return response.choices[0].message.content;
  }

  /**
   * Refines a text prompt to be more precise and concise using OpenAI's API.
   * @param {string} originalPrompt - The original, longer prompt.
   * @returns {Promise<string>} A promise that resolves to the refined prompt.
   */
  async refinePrompt(originalPrompt: string): Promise<string> {
    console.log('refining prompt...');
    try {
      const response = await this.openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content:
              "You are a helpful assistant designed make descriptions of texts more precise and concise. Don't make two separate pictures! They merge with each other.",
          },
          { role: 'user', content: `${originalPrompt}` },
        ],
        model: 'gpt-3.5-turbo-1106',
      });

      return response.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error refining text:', error);
      return originalPrompt; // Return the original text in case of an error
    }
  }
}
