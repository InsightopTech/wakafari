# Build `wakafari` extension for Safari.

1. Generate the crx extension source code
   - Run command：`npm start` @ `./`
   - The crx extension source code will be placed in the `./dist`
2. Import to XCode from `./dist/safari`
   - Run command：`xcrun /Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter --macos-only --bundle-identifier com.insightop.wakafari dist/safari` @ `./`
   - The Safari extension source code will be placed in the `./wakafari`
3. Open project
   - Open `./wakafari/wakafari.xcodeproj` in XCode
