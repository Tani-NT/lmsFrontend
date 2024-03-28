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
npm install -D tailwindcss

2.Create tailwind config file
npx tailwindcss init

3.Add file extensions in the tailwind config file in the content
"./src/**/*.{html,js,jsx,ts,tsx}"

4.Add the tailwind directives
@tailwind base;
@tailwind components;
@tailwind utilities;