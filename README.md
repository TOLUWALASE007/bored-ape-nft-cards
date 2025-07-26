# 🦧 Bored Ape NFT Cards Gallery

A stunning, responsive NFT card gallery featuring Bored Ape Yacht Club collectibles with advanced gradient animations and modern design.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Animated Gradient Borders**: Beautiful flowing gradient animations on card borders
- **Floating Image Animation**: Subtle floating effect on NFT images
- **Gradient Text Effects**: Animated gradient text for card titles
- **Modern UI**: Clean white/black theme with ash background
- **Interactive Elements**: Hover effects and smooth transitions
- **Icon Integration**: Remix Icons for heart and share buttons
- **Custom Animations**: Tailwind CSS custom keyframe animations

## 🎨 Design Theme

### Color Scheme
- **Background**: Soft ash gray (`bg-gray-50`) for easy viewing
- **Cards**: Light gray backgrounds (`bg-gray-100`) with white gradient borders
- **Text**: Black and dark gray for excellent readability
- **Icon Buttons**: Black backgrounds with white icons for strong contrast
- **Gradients**: Preserved colorful animated gradients for visual appeal

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and modern markup
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **JavaScript**: Custom Tailwind configuration and animations
- **Remix Icons**: Beautiful vector icons
- **CSS Animations**: Custom keyframes for smooth effects

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/TOLUWALASE007/bored-ape-nft-cards.git
   cd bored-ape-nft-cards
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your web browser
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 📁 File Structure

```
Bored Ape Cards/
├── index.html          # Main HTML file with NFT gallery
├── script.js           # Tailwind configuration and custom animations
└── README.md          # Project documentation
```

## 🎯 Customization

### Changing Colors
- **Background**: Modify `bg-gray-50` class in the body element
- **Card Backgrounds**: Update `bg-gray-100` class in card containers
- **Text Colors**: Adjust `text-black`, `text-gray-600` classes
- **Icon Buttons**: Modify `bg-black` and `hover:bg-gray-800` classes

### Animation Adjustments
- **Floating Animation**: Edit the `float` keyframes in `script.js`
- **Gradient Animation**: Modify `gradient-x` keyframes in `script.js`
- **Animation Duration**: Change values in the `animation` property

### Adding More Cards
1. Copy the card structure from `index.html`
2. Update the image `src` attribute
3. Modify card title and description
4. Adjust price information

## 🔧 Key Features Explained

### Custom CSS Usage
- **Gradient Borders**: Uses `linear-gradient` with `padding-box` and `border-box`
- **Background Clips**: `background-clip: text` for gradient text effects
- **Blur Effects**: `filter: blur()` for glowing background elements
- **Transforms**: `translateY()` and `scale()` for animations

### CSS Grid Implementation
- **Main Layout**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`
- **Responsive Breakpoints**: 
  - Mobile: 1 column
  - Tablet: 2 columns  
  - Desktop: 3 columns
- **Gap Spacing**: Consistent 8-unit gaps between cards

### Flexbox Usage
- **Card Layout**: `flex flex-col` for vertical stacking
- **Content Distribution**: `flex-grow` for expanding content areas
- **Button Alignment**: `flex items-center justify-between` for action rows
- **Icon Spacing**: `flex space-x-2` for button groups

## 🎭 Animation Details

### Floating Animation
```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
```
- **Duration**: 4 seconds
- **Timing**: `ease-in-out`
- **Loop**: Infinite

### Gradient Animation
```css
@keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}
```
- **Duration**: 4-6 seconds (varies by element)
- **Timing**: `linear` and `ease`
- **Loop**: Infinite

## 🎨 Color Palette

### Primary Colors
- **Indigo**: `#6366f1` - Primary gradient color
- **Pink**: `#ec4899` - Secondary gradient color
- **Green**: `#10b981` - Accent gradient color
- **Orange**: `#f59e42` - Highlight gradient color

### Theme Colors
- **Background**: `#f9fafb` (gray-50)
- **Card Background**: `#f3f4f6` (gray-100)
- **Text Primary**: `#000000` (black)
- **Text Secondary**: `#4b5563` (gray-600)
- **Icon Background**: `#000000` (black)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (limited support)

## ⚡ Performance

- **Lightweight**: Minimal dependencies
- **Optimized Images**: Compressed NFT images from OpenSea
- **Efficient CSS**: Tailwind's purged CSS for production
- **Smooth Animations**: Hardware-accelerated transforms

## 🔮 Future Enhancements

- [ ] Add more NFT collections
- [ ] Implement dark mode toggle
- [ ] Add price history charts
- [ ] Integrate with blockchain APIs
- [ ] Add search and filter functionality
- [ ] Implement lazy loading for images
- [ ] Add sound effects on interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Bored Ape Yacht Club**: For the amazing NFT collection
- **OpenSea**: For providing high-quality NFT images
- **Tailwind CSS**: For the excellent utility-first framework
- **Remix Icons**: For the beautiful icon set

## 💬 Support

If you have any questions or need help with the project:

- 📧 Email: [your-email@example.com]
- 🐛 Issues: [GitHub Issues](https://github.com/TOLUWALASE007/bored-ape-nft-cards/issues)
- 💻 Discussions: [GitHub Discussions](https://github.com/TOLUWALASE007/bored-ape-nft-cards/discussions)

---

**Made with ❤️ for the NFT community** 