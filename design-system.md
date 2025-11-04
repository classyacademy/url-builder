# URL Builder Design System

This document outlines the design system and styling guidelines for the Campaign URL Builder application.

## Color Palette

### Primary Colors
- **Background**: `#ffffff` (white)
- **Primary Text**: `#252525`, `#232323`
- **Secondary Text**: `#6f6f6f`

### Accent Colors
- **Link/Accent Blue**: `#4893bf`
- **Button Background**: `#274a34` (dark green)
- **Button Text**: `#ccf88e` (light green)

### UI Elements
- **Border**: `#b7b7b6`
- **Hover Background**: `#f0f0f0`

## Typography

### Font Families
```css
Primary Sans: 'GoFundMe_Sans:Regular', sans-serif
Primary Bold: 'GoFundMe_Sans:Bold', sans-serif
Secondary Sans: 'CircularXX:Regular', sans-serif
Secondary Bold: 'CircularXX:Bold', sans-serif
```

### Font Sizes
- **Heading Large**: `32px`
- **Heading Small**: `20px`
- **Body**: `16px`

### Font Weights
- **Thin**: `font-thin` (100)
- **Bold**: `font-[175]` (custom weight)

### Line Heights
- **Tight**: `1.1`
- **Normal**: `1.5`
- **Body**: `24px`
- **Heading**: `40px`
- **Reset**: `0` (for specific layouts)

### Letter Spacing
- **Heading Large**: `-0.4px`
- **Heading Small**: `-0.2px`

## Spacing System

### Gap Values
- **XS**: `4px`
- **SM**: `8px`
- **MD**: `16px`
- **LG**: `24px`
- **XL**: `33px`

### Padding Values
- **Button Small**: `12px` (vertical) x `24px` (horizontal)
- **Input Field**: `16px`
- **Container**: `48px`

### Layout Margins
- **Field Label Offset**: `11px` (top)
- **Field Input Offset**: `34px` (top)
- **Copy Button**: `260.282px` (left), `13px` (top)

## Border Radius

- **Small**: `8px` (hover states, small buttons)
- **Medium**: `12px` (input fields)
- **Large**: `20px` (main container)
- **Pill**: `999px` (primary button)

## Component Styles

### Input Fields

#### Text Input
```
Background: white
Border: 1px solid #b7b7b6
Border Radius: 12px
Padding: 16px
Font: GoFundMe_Sans:Regular, 16px
Color: #6f6f6f (placeholder)
```

#### Select Dropdown
```
Background: white (with custom dropdown arrow)
Border: 1px solid #b7b7b6
Border Radius: 12px
Padding: 16px
Font: GoFundMe_Sans:Regular, 16px
Dropdown Icon: 14px x 8px (positioned right)
```

#### Field Label
```
Font: GoFundMe_Sans:Regular, 20px
Color: #252525
Letter Spacing: -0.2px
Line Height: 1.1
Position: Absolute overlay with grid layout
Vertical Offset: 11px from top
```

### Buttons

#### Primary Button
```
Background: #274a34
Text Color: #ccf88e
Font: GoFundMe_Sans:Bold, 16px
Padding: 12px (top/bottom) x 24px (left/right)
Border Radius: 999px
Hover: opacity-90
Transition: opacity
```

#### Copy Link Button
```
Background: transparent
Text Color: #252525
Font: CircularXX:Regular, 16px
Icon Size: 16px x 16px
Hover: opacity-70
Gap: 8px (between icon and text)
```

#### Collapsible Toggle Button
```
Background: transparent
Font: GoFundMe_Sans:Bold, 20px
Color: #232323
Border Bottom: 2px solid #4893bf
Padding Bottom: 16px
Caret Icon: 24px x 24px
Transition: transform 0.2s (for rotation)
```

### Collapsible Sections

#### Section Container
```
Width: 336px
Border Bottom: 2px solid #4893bf
Padding Bottom: 16px (on toggle button)
```

#### Content Area
```
Width: 100%
Margin Top: 16px (when open)
Gap Between Fields: 16px
```

### Typography Components

#### Page Heading
```
Font: CircularXX:Bold, 32px
Line Height: 40px
Letter Spacing: -0.4px
Color: #252525
```

#### Page Description
```
Font: CircularXX:Regular, 16px
Line Height: 24px
Color: #252525
```

#### Section Heading
```
Font: GoFundMe_Sans:Bold, 20px
Line Height: 1.1
Letter Spacing: -0.2px
Color: #232323
```

## Layout Patterns

### Main Container
```
Width: 100% (full viewport)
Height: 100% (full viewport)
Background: white
Border Radius: 20px
Padding: 48px
Display: flex, column
Align Items: center
Justify Content: center
```

### Content Wrapper
```
Width: 337px (primary content width)
Gap: 33px (between major sections)
Display: flex, column
Align Items: center
```

### Field Groups
```
Width: 337px
Gap: 24px (between fields in a group)
Display: flex, column
```

### Grid Layout (for overlapping labels)
```
Display: grid
Grid Columns: max-content
Grid Rows: max-content
Place Items: start
```

### Copy URL Component (Generated Link Display)

The Copy URL component at the bottom of the form uses a sophisticated overlapping grid layout to position the text field and copy button together. This creates a composite component where the button appears to be aligned to the right inside or alongside the text field.

#### Overall Container Structure
```
Display: inline-grid
Grid Columns: max-content
Grid Rows: max-content
Place Items: start
Line Height: 0
Position: relative
```

#### Layout Technique: Overlapping Grid Areas

Both the text field and the copy button are placed in the same grid cell using `[grid-area:1_/_1]`. This CSS Grid shorthand means "place in row 1, column 1" - effectively making both elements occupy the same grid space. The positioning is then refined using margins to create the visual layout.

**Text Field (Base Layer)**
```
Grid Area: 1 / 1 (row 1, column 1)
Width: 250.429px
Margin Left: 0
Margin Top: 0
Z-Index: default (base layer)
Position: relative
```

The text field contains:
- Standard Input component wrapper
- Read-only input element with:
  - Font: GoFundMe_Sans:Regular, 16px
  - Line Height: 1.5
  - Color: #6f6f6f (for displayed URL)
  - Placeholder: "Your generated link will appear here"
  - Background: transparent
  - Border: 0 (inherited from Field component)
  - Outline: none

**Copy Button (Top Layer)**
```
Grid Area: 1 / 1 (same cell as text field)
Width: 74.718px
Margin Left: 260.282px (pushes button to the right)
Margin Top: 13px (vertical centering adjustment)
Z-Index: 10 (sits above text field)
Position: relative
Cursor: pointer
```

#### Copy Button Internal Structure

The copy button uses flexbox to arrange its icon and text horizontally:

```
Display: flex
Flex Direction: row
Gap: 8px (between icon and text)
Align Items: center
```

**Copy Icon Container**
- Size: 16px × 16px
- Overflow: clip
- Contains SVG with 12px × 12px viewBox
- Inset positioning: 13.54%
- Fill color: #232323

**Copy Link Text**
- Font: CircularXX:Regular, 16px
- Line Height: 24px
- Color: #252525
- Text: "Copy link"
- White space: pre (preserves spacing)

#### Visual Layout Explanation

The component achieves its layout through calculated positioning:

1. **Total width consideration**: Text field (250.429px) + Button (74.718px) = ~325px total
2. **Button offset**: The button's left margin (260.282px) positions it to overlap the right portion of the text field
3. **Overlap area**: ~10px of the button overlaps with the text field area
4. **Vertical alignment**: The 13px top margin on the button centers it vertically within the text field's height
5. **Layering**: Z-index of 10 ensures the button is clickable and appears above the text field

#### Interaction States

**Hover State**
```
Button Opacity: 0.7 (hover:opacity-70)
Cursor: pointer
Transition: default opacity timing
```

**Click Behavior**
- Copies the generated URL to clipboard
- Displays success toast: "Link copied to clipboard!"
- Displays error toast if no URL exists: "No URL to copy. Please generate a link first."

#### Precise Measurements Summary

| Element | Width | Margin Left | Margin Top | Z-Index |
|---------|-------|-------------|------------|---------|
| Container | auto (inline-grid) | - | - | - |
| Text Field | 250.429px | 0 | 0 | default |
| Copy Button | 74.718px | 260.282px | 13px | 10 |
| Copy Icon | 16px | - | - | - |
| Gap (icon to text) | 8px | - | - | - |

#### CSS Grid Positioning Rationale

This technique is used instead of a standard flexbox layout for several reasons:
1. **Precise pixel control** over both elements independently
2. **Visual overlap** capability without absolute positioning
3. **Maintains document flow** while achieving overlay effect
4. **Preserves accessibility** as both elements remain in natural DOM order
5. **Z-index stacking** works cleanly with grid positioning

#### Implementation Notes

- Both elements share the same grid cell but have different positioning offsets
- The text field acts as the visual base/background element
- The button appears to "float" over the right side of the text field
- The 10px overlap creates a cohesive single-component appearance
- Read-only input prevents user editing while allowing text selection
- Copy functionality uses the Clipboard API with fallback error handling

## Interactive States

### Hover States
```
Buttons: opacity-70 to opacity-90
Links: underline
Secondary Buttons: background #f0f0f0
```

### Transitions
```
Caret Rotation: transform 0.2s
Button Opacity: transition-opacity (default duration)
```

### Focus States
```
Inputs: outline-none (custom focus handling)
Selects: outline-none (custom focus handling)
```

## Icon Specifications

### Copy Icon
```
Size: 16px x 16px
Inset: 13.54%
Viewbox: 0 0 12 12
Fill: #232323
```

### Caret (Dropdown)
```
Size: 24px x 24px
Inset: 34.38% (top/bottom) x 21.88% (left/right)
Viewbox: 0 0 14 8
Fill: #232323
Rotation: 0deg (closed) / 180deg (open)
```

### Select Dropdown Arrow
```
Size: 14px x 8px
Position: right 0px center
Background: SVG data URI
```

## Responsive Considerations

### Fixed Widths
- Primary content container: `337px`
- Collapsible sections: `336px`
- Copy URL text field: `250.429px`
- Copy button: `74.718px`

### Flexible Elements
- Input fields: `width: 100%` within containers
- Container height: `size-full` (100vh/100vw)

## Accessibility Notes

### ARIA Attributes
- Decorative borders: `aria-hidden="true"`
- Data attributes for component identification: `data-name`

### Semantic HTML
- Buttons use `<button>` elements
- Form inputs use proper `<input>` and `<select>` elements
- Read-only fields marked with `readOnly` attribute

## Animation & Motion

### Collapsible Sections
```
Property: transform
Duration: 0.2s
Timing: default ease
Transform: rotate(0deg) to rotate(180deg)
```

### Button Hover
```
Property: opacity
Timing: default ease
```

## Z-Index Layers

### Stacking Order
```
1. Base layer: inputs and content
10. Interactive overlays: copy button (z-10)
[aria-hidden borders]: No z-index (decorative)
```

## Notes

- All measurements are in pixels unless otherwise specified
- Font weights use custom values (e.g., `font-[175]`)
- The design uses a combination of CSS Grid and Flexbox for layouts
- Background images for select dropdowns use data URIs
- The design maintains consistent spacing through gap utilities
- Pointer events are disabled on decorative borders
