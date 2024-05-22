## Blog-Backend-REST-API-NestJS-Prisma

A simple backend REST API for a blog built using NestJS, Prisma, PostgreSQL, and Swagger. This project also integrates third-party APIs such as Stable Diffusion for image segmentation and inpainting, allowing users to update and restyle images with modern designs.

### Features

- CRUD operations for blog posts
- Integration with Stable Diffusion API for image segmentation and inpainting
- PostgreSQL database with Prisma ORM
- Comprehensive API documentation with Swagger

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/micwonder/restyle-nest-backend.git
   cd restyle-nest-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start a PostgreSQL database with Docker:**
   ```bash
   docker-compose up -d
   ```
   - If you have a local instance of PostgreSQL running, you can skip this step. In this case, you will need to change the `DATABASE_URL` inside the `.env` file with a valid [PostgreSQL connection string](https://www.prisma.io/docs/concepts/database-connectors/postgresql#connection-details) for your database.

4. **Apply database migrations and seed data:**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the project:**
   ```bash
   npm run start:dev
   ```

6. **Access the project:**
   Open your browser and navigate to [http://localhost:3000/api](http://localhost:3000/api) to access the API.

### API Reference

The API documentation is available at [http://localhost:3000/api](http://localhost:3000/api) thanks to Swagger integration.

### Integration with Stable Diffusion API

This backend uses the Stable Diffusion API for image segmentation and inpainting, which allows users to restyle and modernize images, such as room interiors, by updating their colors and styles.

**Example Request:**

```json
{
  "prompt": "interior room design fashion furniture bedroom",
  "negative_prompt": "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
  "guidance": 7.5,
  "init_image": "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1588816411682820860.png",
  "safety_checker": "yes",
  "width": "512",
  "height": "512",
  "samples": "3",
  "steps": 20,
  "seed": 0,
  "strength": 0.7,
  "webhook": null,
  "track_id": null
}
```

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
DATABASE_URL=postgresql://user:password@localhost:5432/database_name
STABLE_DIFFUSION_API_KEY=your_stable_diffusion_api_key
```

### Running Tests

To run tests, use the following command:

```bash
npm run test
```

### Contributing

If you wish to contribute to this project, please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.
