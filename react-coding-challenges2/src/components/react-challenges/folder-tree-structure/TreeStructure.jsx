import File from "./File";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: ".bin",
          children: [
            {
              name: "package.json",
            },
          ],
        },
        {
          name: "package.json",
        },
      ],
    },
    {
      name: "public",
      children: [
        {
          name: "vite.svg",
        },
      ],
    },
    {
      name: "src",

      children: [
        {
          name: "App.jsx",
        },
        {
          name: "App.css",
        },
      ],
    },
    {
      name: "index.html",
    },
  ],
};

// EXAMPLE OF REACT APP USING RECURSION
// EXAMPLE OF REACT APP USING RECURSION
// EXAMPLE OF REACT APP USING RECURSION

function TreeStructure() {
  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col gap-2 text-sm">
        {files.children.map((file) => (
          <File key={file.name} {...file} depth={0} />
        ))}
      </div>
    </div>
  );
}

export default TreeStructure;
