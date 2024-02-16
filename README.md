# 🪗 Remix SPA Mode + 🤗 Hugging Face
![Remix Hugging Face devSA terminal logo](https://res.cloudinary.com/jessebubble/image/upload/v1708041429/hugging-remix_h5wjiw.png)

## 🪗 Remix SPA Mode
From the beginning, Remix's opinion has always been that you own your server architecture. This is why `Remix` is built on top of the `Web Fetch API` and can run on any modern runtime via built-in or community-provided adapters. While we believe that having a server provides the best UX/Performance/SEO/etc. for most apps, it is also undeniable that there exist plenty of valid use cases for a Single Page Application in the real world:

- You don't want to manage a server and prefer to deploy your app via static files on Github Pages or another CDN
- You don't want to run a Node.js server
- You want to migrate a React Router app to Remix
- You're developing a special type of embedded app that can't be server rendered
- "Your boss couldn't care less about the UX ceiling of SPA architecture and won't give your dev teams time/capacity to re-architect things" - Kent C. Dodds

This template leverages [Remix SPA Mode](https://remix.run/docs/en/main/future/spa-mode) to build your app as a Single-Page Application using [Client Data](https://remix.run/docs/en/main/guides/client-data) for all of you data loads and mutations.

⚠️ This is built on top of the Remix Vite template. Remix support for Vite is currently unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## 🤗 Hugging Face
Hugging Face is the collaboration platform for the machine learning community.

The Hugging Face Hub works as a central place where anyone can share, explore, discover, and experiment with open-source ML. HF empowers the next generation of machine learning engineers, scientists, and end users to learn, collaborate and share their work to build an open and ethical AI future together.

With the fast-growing community, some of the most used open-source ML libraries and tools, and a talented science team exploring the edge of tech, Hugging Face is at the heart of the AI revolution.

### Models
Hugging Face provides a large repository of pre-trained models, primarily focused on Natural Language Processing (NLP) tasks. These models are trained on various tasks like text classification, named entity recognition, translation, summarization, etc. They support a wide range of architectures like BERT, GPT-2, GPT-3, T5, and more. You can use these models directly or fine-tune them on your own data.

### Datasets
Along with models, Hugging Face also provides a vast collection of datasets. These datasets cover a wide range of tasks in NLP, including but not limited to text classification, translation, question answering, and more. The datasets library also provides functionality for loading, processing, and analyzing your own datasets.

### Inference API
The Inference API is a service provided by Hugging Face that allows you to use their pre-trained models without having to download and run them locally. You send a request to the API with your input data, and the API returns the model's output. This is particularly useful if you don't have the resources to run large models locally or if you want to use the models in a web application. The API is free to use but rate-limited, and Hugging Face offers a paid version for production use with higher rate limits and additional features.

> The Inference API is free to use, and rate limited. If you need an inference solution for production, check out our Inference Endpoints service. With Inference Endpoints, you can easily deploy any machine learning model on dedicated and fully managed infrastructure. Select the cloud, region, compute instance, autoscaling range and security level to match your model, latency, throughput, and compliance needs.

![Hugging Face Gif](https://res.cloudinary.com/jessebubble/image/upload/v1708041444/images_modern_Huggies_Doodle_Huggy_cqsv7a.gif)