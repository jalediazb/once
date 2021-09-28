module.exports = function (eleventyConfig) {
    // Carpetas que añade directamente al directorio de salida
    // eleventyConfig.addPassthroughCopy("src/_css");
    eleventyConfig.addPassthroughCopy("src/_images");
    eleventyConfig.addPassthroughCopy("htaccess");


    // Categorias
    // eleventyConfig.addCollection('categories', collection => {
    //     return collection.getAll().filter(post => post.data.hasOwnProperty('category') === true)
    // })

    // Taglist
    // eleventyConfig.addCollection("tagsList", function(collectionApi) {
    //     const tagsList = new Set();
    //     collectionApi.getAll().map( item => {
    //         if (item.data.tags) { // handle pages that don't have tags
    //             item.data.tags.map( tag => tagsList.add(tag))
    //         }
    //     });
    //     return tagsList;
    // });

    // eleventyConfig.addCollection("categoriesList", function(collectionApi) {
    //     const categoriesList = new Set();
    //     collectionApi.getAll().map( item => {
    //         // if (item.data.category) {
    //         //     item.data.category.map( categoria => categoryList.add(categoria))
    //         // }
    //         categoriesList.add(item.data.category)
    //     })
    //     return categoriesList;
    // });

    // // Articulos con Categoría
    // eleventyConfig.addCollection('articulos', collection => {
    //     return collection.getAll().filter(post => post.data.category !== null );
    // })

    // eleventyConfig.addCollection('articlesByTag', collection => {

    //     let articulos = collection.getAll()
    //     let allTags = []
    //     articulos.map((item) => {
    //         allTags.push(...item.data.tags)
    //     })
    //     const tags = new Set()
    //     allTags.forEach((item) => tags.add(item))

    //     let articlesByTags = {}

    //     for (let tag of tags) {
    //         articlesByTags[tag] = []
    //         articulos.forEach( (item) => {
    //             if (item.data.tags.includes(tag)) {
    //                 articlesByTags[tag].push(item)
    //             }
    //         })
    //     }

    //     // console.log(articlesByTags)
    //     return articlesByTags
    // })

    /* --- ADS --- */
    eleventyConfig.addNunjucksShortcode("topIndexAd", function() {
        return ``
    })

    eleventyConfig.addNunjucksShortcode("topPostAd", function() {
        return ``
    })

    eleventyConfig.addNunjucksShortcode("bottomImagePostAd", function() {
        return ``
    })

    eleventyConfig.addNunjucksShortcode("bottomContentPostAd", function() {
        return ``
    })

    eleventyConfig.addNunjucksShortcode("topPostMinimalAd", function() {
        return ``
    })

    eleventyConfig.addNunjucksShortcode("bottomContentPostMinimalAd", function() {
        return ``
    })
    /* --- ./ADS --- */


    eleventyConfig.addShortcode("logoSVG", function() {
        return `<svg version="1" xmlns="http://www.w3.org/2000/svg" width="853.333" height="213.333" viewBox="0 0 640 160"><path d="M576.3 21.9l-4.2 1.9-4 12.9c-13.3 42.6-28.1 91.8-28.1 93.5 0 3.3 1.8 5.5 6 7.2 8.7 3.5 12.9 1.4 15.3-7.4.9-3 2.3-8.1 3.2-11.3l1.6-5.7h36.8l1.5 5.3c.8 2.8 2.2 7.9 3.1 11.2.9 3.3 2.6 6.8 3.7 7.7 5 4.4 17.8-.5 17.8-6.7 0-2.1-13.4-46.7-28.1-93.8l-4-12.8-4.2-2c-5.3-2.4-11.1-2.4-16.4 0zm15.1 49.8C595 84.5 598 95.4 598 96c0 .6-4.9 1-13.5 1-10 0-13.5-.3-13.5-1.2 0-1.5 13.2-47.9 13.5-47.6.2.2 3.2 10.8 6.9 23.5zM175 21.7c-.8.3-2.3 1.2-3.2 2.1-1.7 1.4-1.8 5.4-1.8 56.3v54.8l2.7 2.1c2.6 2.1 3.5 2.1 26.8 1.8 22.7-.3 24.3-.4 29.2-2.7 6.8-3 12.5-9.3 14.9-16.2 2.3-6.7 2.6-24.5.5-30.3-1.7-4.8-7.1-10.9-11.1-12.6-1.7-.7-3-1.5-3-1.9 0-.3 1.6-1.6 3.6-2.9 5.7-3.7 8.8-11.6 8.9-22.2 0-4.7-.6-10.2-1.4-12.4-1.9-5.5-7.3-11-13.4-13.7-4.9-2.2-6.4-2.4-28.2-2.6-12.6-.1-23.7 0-24.5.4zm41.5 19.7c5.2 3.4 7 12.1 3.7 18.6-2.7 5.4-6.9 7-18.9 7H191V38.7l11.4.5c8.6.3 12 .8 14.1 2.2zm1.2 43.9c5 2.7 6.8 6.9 6.8 16.2 0 15.3-3.8 18.7-21.7 19.3l-11.8.4V82.8l11.8.4c8.6.3 12.6.8 14.9 2.1zm46.1-62.8c-1.5.9-3 2.6-3.4 3.9-.3 1.2-.4 21.4-.2 44.7.3 41 .4 42.6 2.6 47.9 3 7.6 7 12.1 13.9 15.7 13.5 7.1 31.1 7.1 44.6 0 6.9-3.6 10.9-8.1 14-15.7 2.1-5.3 2.2-6.8 2.5-47.9.2-23.4.1-43.5-.3-44.8-.8-3.4-5.9-5.6-11.7-5.1-9.2.9-8.7-1.9-9 46.7-.3 42.3-.3 42.6-2.6 46.2-2.9 4.8-7.9 7.1-15.3 7.1-7.6 0-12.6-2.5-15.3-7.8-2-3.7-2.1-5.7-2.4-46-.3-40.5-.4-42.3-2.3-44-2.6-2.4-11.5-2.9-15.1-.9zm97.2-.4c-1.3.6-2.8 1.5-3.2 2.2-.4.7-.8 25.8-.8 55.9v54.7l2.6 2c2.6 2 3.9 2.1 30.8 2.1 21.9 0 28.6-.3 30-1.3 2.7-2 3.4-10.8 1.2-14.2L420 121h-42V74.1c0-25.8-.3-47.7-.6-48.6-1.5-3.8-10.6-5.7-16.4-3.4zm79.4-.1c-5.5 2.2-5.4 1-5.4 59.2V135l3.3 2c3.8 2.4 8.5 2.5 13.2.6 1.9-.8 3.6-1.6 3.7-1.8.1-.2.5-16.7.8-36.7l.5-36.4 9.3 17.7c5.5 10.2 10.4 18.3 11.7 19.2 2.8 1.9 7.6 1.2 9.7-1.4.8-.9 5.5-8.9 10.4-17.7l8.9-16 .5 35c.3 19.2.8 35.5 1.3 36.2 2.3 3.6 14.1 4.1 17.8.7 1.8-1.6 1.9-3.7 1.9-55.6v-54l-2.9-2.9c-3.4-3.3-8.8-3.9-14.5-1.5-4.5 1.9-6.7 5-18.6 26.9-5.7 10.3-10.4 18.6-10.6 18.4-.2-.1-4.9-8.6-10.5-18.7-11.4-20.8-13.8-24.4-17.9-26.5-3.2-1.6-9.2-1.9-12.6-.5z"/></svg>`
    })


    /* --- Social Icons --- */
    eleventyConfig.addNunjucksShortcode("facebookDarkIcon", function() {
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="#666666" /></svg>`
    })
    eleventyConfig.addNunjucksShortcode("facebookLightIcon", function() {
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="#ffffff" /></svg>`
    })
    eleventyConfig.addNunjucksShortcode("twitterDarkIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" fill="#666666"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("twitterLightIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" fill="#ffffff"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("pinterestLightIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M0 12c0 5.123 3.211 9.497 7.73 11.218c-.11-.937-.227-2.482.025-3.566c.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9c1.02 0 1.512.765 1.512 1.682c0 1.025-.653 2.557-.99 3.978c-.281 1.189.597 2.159 1.769 2.159c2.123 0 3.756-2.239 3.756-5.471c0-2.861-2.056-4.86-4.991-4.86c-3.398 0-5.393 2.549-5.393 5.184c0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355c-.053.218-.173.265-.4.159c-1.492-.694-2.424-2.875-2.424-4.627c0-3.769 2.737-7.229 7.892-7.229c4.144 0 7.365 2.953 7.365 6.899c0 4.117-2.595 7.431-6.199 7.431c-1.211 0-2.348-.63-2.738-1.373c0 0-.599 2.282-.744 2.84c-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12z" fill="#ffffff"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("pinterestDarkIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M0 12c0 5.123 3.211 9.497 7.73 11.218c-.11-.937-.227-2.482.025-3.566c.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9c1.02 0 1.512.765 1.512 1.682c0 1.025-.653 2.557-.99 3.978c-.281 1.189.597 2.159 1.769 2.159c2.123 0 3.756-2.239 3.756-5.471c0-2.861-2.056-4.86-4.991-4.86c-3.398 0-5.393 2.549-5.393 5.184c0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355c-.053.218-.173.265-.4.159c-1.492-.694-2.424-2.875-2.424-4.627c0-3.769 2.737-7.229 7.892-7.229c4.144 0 7.365 2.953 7.365 6.899c0 4.117-2.595 7.431-6.199 7.431c-1.211 0-2.348-.63-2.738-1.373c0 0-.599 2.282-.744 2.84c-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12z" fill="#666666"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("instagramLightIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z" fill="#ffffff"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("instagramDarkIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z" fill="#666666"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("githubLightIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="#ffffff"/></g></svg>`
    })
    eleventyConfig.addNunjucksShortcode("whatsappIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1a1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.971 2.742c.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231a4.83 4.83 0 0 0 .383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288c.083-.086.155-.187.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041a.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13a1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536c-.28-.684-.57-1.365-.868-2.041c-.059-.134-.234-.23-.393-.249c-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" fill="#666666"/></svg>`
    })
    eleventyConfig.addNunjucksShortcode("mailIcon", function() {
        return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938c-10.5 7.655-31.392 26.12-45.883 25.894c-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214c14.162 10.341 37.975 32.145 64.694 32.01c26.887.134 51.037-22.041 64.72-32.025c61.958-44.965 81.325-59.406 95.283-70.199z" fill="#666666"/></svg>`
    })
    /* --- Social Icons --- */

    // Formato de Fecha
    const { DateTime } = require("luxon");
    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).setLocale('es').toLocaleString(DateTime.DATE_SHORT);
    });

    // Número de caracteres para Card
    eleventyConfig.addFilter('descriptionLength', function(text) {
        let resultado
        text === undefined ? resultado = '' : resultado = String(text).slice(0, 70) + '...';
        return resultado
    });

    // Artículos relacionados
    eleventyConfig.addFilter('relacionados', function(collection, etiquetas, path, limite) {

        const filtrados = new Set();

        collection.map(item => {
            for (etiqueta of etiquetas) {
                // console.log(item.data.tags.length)
                if (item.data.tags && item.data.tags.includes(etiqueta)) {
                    filtrados.add(item)
                }
            }
        })

        // Eliminar Post Actual
        for (item of filtrados) {
            if (item.data.page.inputPath == path) {
                filtrados.delete(item)
            }
        }

        // Limitar el número de Articulos y que sean aleatorios
        let articulosFiltrados = Array.from(filtrados)
        if(articulosFiltrados.length <= limite) {
            return articulosFiltrados
        }

        do {
            let indice = Math.floor(Math.random()*articulosFiltrados.length)
            articulosFiltrados.splice((indice - 1), 1)

        } while (articulosFiltrados.length > limite)

        return articulosFiltrados

    })


    // Clean-css
    const CleanCSS = require("clean-css");
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // PurgeCss
    const purgeCssPlugin = require("eleventy-plugin-purgecss");
    if (process.env.ELEVENTY_ENV === "production") {
        eleventyConfig.addPlugin(purgeCssPlugin, {
            // Optional: Specify the location of your PurgeCSS config
            config: "./purgecss.config.js",
            // Optional: Set quiet: true to suppress terminal output
            quiet: false,
        });
    }

    // Inline JS
    const { minify } = require("terser");
    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
    ) {
    try {
        const minified = await minify(code);
        callback(null, minified.code);
    } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
    }
    });

    // Minify Html
    const htmlmin = require("html-minifier");

    if (process.env.ELEVENTY_ENV === "production") {
        eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
            // Eleventy 1.0+: use this.inputPath and this.outputPath instead
            if (outputPath && outputPath.endsWith(".html")) {
                let minified = htmlmin.minify(content, {
                    useShortDoctype: true,
                    removeComments: true,
                    collapseWhitespace: true
                });
                return minified;
            }
            return content;
        });
    }

    // Estructura de directorios
    return {
        dir: {
            input: './src',
            data: '../_data',
            includes: '../_includes'
        }
    }
}

