vite-wasm
=========

This repo contains working exmaple overcoming issues related to using wasm package built with ``wasm-pack build`` [#f1]_.


Sidenote on other work arounds
------------------------------

At the time of writing, builging the with ``wasm-pack build target --build`` produces a package that works fine 

## References
### Vite
[^1]: https://github.com/vitejs/vite/issues/4551
- https://github.com/Menci/vite-plugin-wasm
- https://vitejs.dev/guide/features.html#webassembly

### rust wasm
- https://rustwasm.github.io/docs/wasm-pack/


.. [#f1] https://github.com/vitejs/vite/issues/4551
.. [#f2] https://vitejs.dev/guide/features.html#webassembly