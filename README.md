#LMS Frontend

###Setup Instruction

1.Clone the project
``` 
git clone: https://github.com/Tani-NT/lmsFrontend.git
```
2.Move into the directory
```
cd lmsFrontend
```
3.Install the dependency
``` 
npm i
```
4. Run the server
```
npm run dev
```

###Setup instruction for Tailwindcss

1.Install tailwindcss
npm install -D tailwindcss postcss autoprefixer

2.Create tailwind config file
npx tailwindcss init

3.Add file extensions in the tailwind config file in the content
content: ["./index.html ,./src/**/*.{html,js,jsx,ts,tsx}"]

4.Add the tailwind directives
@tailwind base;
@tailwind components;
@tailwind utilities;

#Installing the dependency
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

#To sort the import 
npm i eslint-plugin-simple-import-sort