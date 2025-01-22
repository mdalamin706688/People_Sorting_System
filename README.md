# People Sorting Department Training System
## Technical Documentation

### Table of Contents
1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Components](#components)
7. [Features](#features)
8. [Development Guidelines](#development-guidelines)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

### Project Overview

The People Sorting Department Training System is a Vue.js application designed to train civil servants in sorting people based on their potato counts. The system generates random user data and allows trainees to practice sorting through a drag-and-drop interface while being timed.

### Technical Stack

- Vue.js 3 (Composition API)
- Vuetify 3 (UI Framework)
- Faker.js (Data Generation)
- Material Design Icons
- CSS3 with Scoped Styling

### Prerequisites

- Node.js (v16.0 or higher)
- npm (v7.0 or higher)
- Modern web browser with drag-and-drop support

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sorting-training-system
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Project Structure

```
src/
├── assets/
│   └── main.css                 # Global styles
├── components/
│   ├── SortingTable.vue        # Main sorting interface
│   ├── StartModal.vue          # Initial configuration modal
│   └── SuccessModal.vue        # Completion feedback modal
├── composables/
│   └── useTimer.js             # Timer functionality
├── utils/
│   ├── generatePeople.js       # Data generation utility
│   └── validators.js           # Form validation rules
├── App.vue                     # Root component
└── main.js                     # Application entry point
```

### Components

#### App.vue
- Root component managing application state
- Handles game flow and modal visibility
- Integrates timer functionality

#### SortingTable.vue
- Properties:
  - `people`: Array of person objects
- Events:
  - `sorted`: Emitted when list is correctly sorted
- Features:
  - Drag-and-drop functionality
  - Visual feedback for correct positioning
  - Real-time sort validation

#### StartModal.vue
- Properties:
  - `modelValue`: Boolean for v-model binding
- Events:
  - `update:modelValue`: Modal visibility updates
  - `start`: Game initialization with count
- Features:
  - Input validation (20-100 range)
  - Error messaging
  - Keyboard support (Enter key)

#### SuccessModal.vue
- Properties:
  - `modelValue`: Boolean for v-model binding
  - `time`: String showing completion time
- Events:
  - `update:modelValue`: Modal visibility updates
  - `restart`: New game initialization

### Features

1. Game Initialization
   - Configurable number of entries (20-100)
   - Random data generation
   - Unique potato count validation

2. Sorting Interface
   - Drag-and-drop functionality
   - Visual feedback for correct positioning
   - Real-time validation

3. Timer System
   - Automatic start on game initialization
   - Automatic stop on correct sorting
   - MM:SS format display

4. Data Generation
   - Random names via Faker.js
   - Unique email addresses
   - Non-repeating potato counts
   - Configurable range support

### Development Guidelines

1. Code Style
   - Use Composition API
   - Implement proper type checking
   - Follow Vue.js naming conventions
   - Maintain component scoping

2. Component Design
   - Single responsibility principle
   - Props validation
   - Event documentation
   - Scoped styling

3. Performance Considerations
   - Optimize drag-and-drop operations
   - Implement proper computed properties
   - Use v-show for frequent toggles
   - Maintain efficient reactivity

### Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` directory to your hosting service

3. Ensure proper configuration for:
   - Base URL settings
   - Environment variables
   - Server routing rules

### Troubleshooting

Common Issues and Solutions:

1. Drag-and-Drop Not Working
   - Check browser compatibility
   - Verify event handlers
   - Console for JavaScript errors

2. Timer Issues
   - Check browser tab focus
   - Verify interval clearance
   - Monitor memory usage

3. Data Generation Problems
   - Verify Faker.js installation
   - Check unique value generation
   - Monitor array bounds

4. Performance Issues
   - Implement pagination for large datasets
   - Optimize drag event handlers
   - Monitor memory usage
   - Use Chrome DevTools for profiling

For additional support:
- Check the Vue.js documentation
- Review Vuetify component guides
- Consult the project issue tracker

### Best Practices

1. State Management
   - Use composables for shared logic
   - Implement proper prop drilling
   - Maintain clear data flow

2. Error Handling
   - Implement input validation
   - Provide user feedback
   - Log errors appropriately

3. Testing
   - Unit test components
   - Test drag-and-drop functionality
   - Verify timer accuracy
   - Validate sorting logic

4. Accessibility
   - Implement ARIA labels
   - Ensure keyboard navigation
   - Maintain proper contrast
   - Support screen readers

### Future Enhancements

Potential improvements to consider:

1. Features
   - Multiple difficulty levels
   - Score persistence
   - Leaderboard functionality
   - Additional sorting criteria

2. Technical
   - State management for larger scale
   - Additional unit tests
   - E2E testing implementation
   - Performance optimizations

3. UX/UI
   - Additional animation feedback
   - Responsive design improvements
   - Theme customization
   - Accessibility enhancements