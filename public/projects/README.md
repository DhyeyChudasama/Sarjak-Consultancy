# Project Photos Upload Instructions

## How to Upload Your Real Client Project Photos

To replace the placeholder project images with your actual client project photos, follow these steps:

### Step 1: Prepare Your Photos
1. **Resize your photos** to optimal web dimensions:
   - **Recommended size**: 1200x800 pixels (3:2 aspect ratio)
   - **Maximum file size**: 500KB per image for fast loading
   - **Format**: JPG or PNG (JPG preferred for photos)

### Step 2: Name Your Photos
Name your project photos exactly as follows:
- `project-1.jpg` - First residential project
- `project-2.jpg` - First commercial project  
- `project-3.jpg` - Second residential project
- `project-4.jpg` - Second commercial project
- `project-5.jpg` - Third residential project
- `project-6.jpg` - Third commercial project

### Step 3: Upload to Public Folder
1. Place all your project photos in the `/public/projects/` folder
2. The file structure should look like:
   ```
   public/
   ├── projects/
   │   ├── project-1.jpg
   │   ├── project-2.jpg
   │   ├── project-3.jpg
   │   ├── project-4.jpg
   │   ├── project-5.jpg
   │   └── project-6.jpg
   ```

### Step 4: Update Project Details (Optional)
If you want to customize the project titles and descriptions, you can edit the `src/components/Projects.tsx` file:

```javascript
{
  id: 1,
  title: "Your Custom Project Name",
  category: "Residential", // or "Commercial"
  date: "2024",
  location: "Your Location",
  description: "Your project description here..."
}
```

### Important Notes:
- **Fallback Images**: The website includes fallback placeholder images that will show if your photos aren't uploaded yet
- **Image Quality**: Use high-quality photos that showcase your best work
- **Before/After**: Consider showing completed projects rather than construction progress
- **Professional Photos**: Well-lit, professional photography will make the biggest impact

### Photo Tips for Best Results:
- **Lighting**: Take photos during golden hour (sunrise/sunset) for warm, professional lighting
- **Angles**: Capture multiple angles - exterior, interior, detail shots
- **Composition**: Include context showing the full building/project scope
- **Quality**: Use the highest resolution camera available
- **Editing**: Basic color correction and brightness adjustment can enhance appeal

Once you upload your photos with the correct names, they will automatically appear on your website!