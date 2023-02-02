vite-wasm
=========

This repo contains working exmaple overcoming issues related to using wasm package built with ``wasm-pack build`` [#f1]_ [#f2]_.

i.e. Building a package with ``wasm-pack`` that can be added to a ``vite`` project by ``yarn add package-name@file:pkg-path``.

by making use of ``vite-plugin-wasm`` [#f3]_


Sidenote on other work arounds
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Building the wasm package with ``wasm-pack build target --web`` produces a package that:

* Works fine after ``npm run build`` but fails to work in ``dev`` environment
* Works fine in both ``dev`` and ``build`` if included in the source code directly and importing by path

More on ``wasm-pack`` build [#f4]_

Usage
-----

0. Setup ``wasm-pack`` and ``yarn`` environment.

1. In your wasm project, run::
   
    wasm-pack build target --bundler

2. Follow the instrunction `here <https://github.com/Menci/vite-plugin-wasm#readme>`_ on install and setup ``vite-plugin-wasm``

3. Add your wasm package by running::
   
    yarn add package-name@file:pkg-path

4. Importing the wasm package should now works under both ``dev`` and ``build`` environment.


References
----------

.. [#f1] https://github.com/vitejs/vite/issues/4551
.. [#f2] https://vitejs.dev/guide/features.html#webassembly
.. [#f3] https://github.com/Menci/vite-plugin-wasm
.. [#f4] https://rustwasm.github.io/docs/wasm-pack/commands/build.html