# DevPillar
Community led resource library.

# Contribution Guidelines for Adding Resources

We welcome and appreciate contributions from the community to help grow our directory of developer resources. Follow these guidelines to ensure your pull request is accepted smoothly.

## File Structure
- The main file to be modified is `src/lib/resources.ts`.
- Place your submissions within the array of resources that begins on line 187.
- Each resource must be formatted correctly and include a valid image.

## Resource Format
Each resource should be an object with the following properties:
```typescript
{
  name: string;
  description: string;
  category: string[]; // No more than 2 categories
  subcategory: string[]; // No more than 3 subcategories
  url: string;
  paid: "Free" | "Paid";
  keywords: string[];
  image: string; // Preferred hosting on Cloudinary
}
```
Example:
```typescript
{
  name: "Example Resource",
  description: "A brief description of the resource.",
  category: ["Category1"],
  subcategory: ["Subcategory1", "Subcategory2"],
  url: "https://example.com",
  paid: "Free",
  keywords: ["keyword1", "keyword2"],
  image: "https://res.cloudinary.com/[IMAGE_URL]"
}
```

## Categories and Subcategories
When adding a resource, please choose appropriate categories and subcategories from the list below. Each resource should have no more than 2 categories and no more than 3 subcategories.

### Categories and Subcategories:
1. **Development Tools & Extensions**
   - VS Code Extensions
   - Browser Extensions
   - Website Builders
   - AI
2. **Design & UI**
   - UI UX
   - CSS
   - Backgrounds
   - Color
   - Fonts
   - Icons
   - Illustrations
3. **Media**
   - Images
   - Video
   - Animations
   - Screenshots
4. **Components & Libraries**
   - Components
   - Snippets & Hooks
   - Libraries & Packages
   - Frameworks
5. **Backend & Infrastructure**
   - API
   - Database
   - Authentication
   - Web Hosting
   - SAAS
   - CMS
   - Performance
6. **Learning & Documentation**
   - Documentation
   - Learning & Challenges
   - Cheatsheets
   - Books
   - Youtube Channels
   - Accessibility
   - Typing
7. **Productivity & Writing**
   - Writing
   - Social Media
   - Email
   - Boilerplate
   - Typing
8. **SEO & Analytics**
   - SEO
   - Data Visualization
9. **Open Source & Community**
   - Open Source
   - Web3

## Image Hosting
- Preferred image hosting is on Cloudinary.
- If using another hosting service, ensure the URL is accessible and add the domain to `remotepatterns` in the Next.js config.
- Images should typically be screenshots of the resource's home page.

## Pull Request Workflow
1. **Fork the Repository**: Create a fork of the repository to your own GitHub account.
2. **Create a New Branch**: Create a new branch from the `main` branch for your additions.
3. **Add Your Resource**: Add your resource(s) to the `resources.ts` file, ensuring all fields are correctly filled out and formatted.
4. **Commit Your Changes**: Write a clear and concise commit message. Example: `Add [Resource Name] to resources`.
5. **Open a Pull Request**: Submit a pull request to the `main` branch of the repository.

### Pull Request Template
Use the following template for your pull request description:
```markdown
## Description
Add [Resource Name] to the resources directory.

## Checklist
- [ ] The resource is formatted correctly.
- [ ] The image is hosted on Cloudinary or another accessible hosting service.
- [ ] The resource includes no more than 2 categories.
- [ ] The resource includes no more than 3 subcategories.
- [ ] The resource includes all required fields.
- [ ] The resource has been tested for valid links and images.
```

## Review Process
- Noah ([@_pittman](https://twitter.com/_pittman)) will review and merge pull requests.
- Criteria for review:
  - Correct formatting and valid data
  - Proper image hosting and accessibility
  - Appropriate use of categories and keywords
- If there are issues with the submission, feedback will be provided for necessary corrections.

## Common Pitfalls
- **Incorrect Formatting**: Ensure your resource follows the exact format provided.
- **Invalid Image URLs**: Double-check that image URLs are correct and accessible.
- **Exceeding Category/Subcategory Limit**: Do not assign more than 2 categories or more than 3 subcategories to a resource.
- **Incomplete Information**: Fill out all fields, including keywords, to improve searchability.

## Automated Checks
- While there are no automated checks or continuous integration tools in place, the array will be automatically sorted when the pages are rendered, so there is no need to manually sort entries.
