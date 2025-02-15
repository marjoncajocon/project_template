#watcher 

esbuild main.js --bundle --minify --outfile=build/main.min.js --loader:.jfif=file --loader:.eof=file --loader:.woff=file --loader:.svg=file --loader:.ttf=file --loader:.woff2=file --loader:.jpeg=file --loader:.eot=file --asset-names=res/[name] --watch --target=es2015

#builder 

esbuild main.js --bundle --minify --outfile=build/main.min.js --drop:console --loader:.jfif=file --loader:.eof=file --loader:.woff=file --loader:.svg=file --loader:.ttf=file --loader:.woff2=file --loader:.eot=file --loader:.jpeg=file --asset-names=res/[name] --target=es2015