# project_template

folder
  -> lib : Where the source code, routing, templating
  -> plugin : List of elements default
  -> theme  : List of the controls (Widgets) 

file
  -> index.html : html template entry point
  -> main.js : main entry point





#watcher 

esbuild main.mts --bundle --minify --outfile=build/main.min.js --sourcemap --loader:.jfif=file --loader:.eof=file --loader:.woff=file --loader:.svg=file --loader:.ttf=file --loader:.woff2=file --loader:.jpeg=file --loader:.eot=file --asset-names=res/[name] --watch --target=es2015

#builder 

esbuild main.mts --bundle --minify --outfile=build/main.min.js --sourcemap --drop:console --loader:.jfif=file --loader:.eof=file --loader:.woff=file --loader:.svg=file --loader:.ttf=file --loader:.woff2=file --loader:.eot=file --loader:.jpeg=file --asset-names=res/[name] --target=es2015