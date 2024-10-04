export const getProducts = async () => {
    let productsData = [];

    try {
        // const res = await fetch('http://localhost:8000/products');

        const res = await fetch('https://meditek-api.mk.meditek.com.mk/products');
        productsData = await res.json();
    } catch (e) {}

    return productsData.reverse();
}

export const getNews = async () => {
    let data = [];

    try {
        const res = await fetch('https://meditek-api.mk.meditek.com.mk/news');
        // const res = await fetch('http://localhost:8000/news');
        data = await res.json();
    } catch (e) {}

    return data.reverse();
}

export const getBrands = async () => {
    let data = [];

    try {
        const res = await fetch('https://meditek-api.mk.meditek.com.mk/brands');
        // const res = await fetch('http://localhost:8000/brands');
        data = await res.json();
    } catch (e) {}

    return data.reverse();
}


export const getProductTitle = (product) => {
    const params = new URLSearchParams(window.location.search);

    if (
        params.get('lang') === 'mk'
        || params.get('lang') === 'null'
        || !params.get('lang')
    ) {
        return product.titleMk;
    }

    return product.title;
}

export const getProductDescription = (product) => {
    const params = new URLSearchParams(window.location.search);
 
    if (
        params.get('lang') === 'mk'
        || params.get('lang') === 'null'
        || !params.get('lang')
    ) {
        return product.descriptionMk;
    }

    return product.description;
}


export const getNewsTitle = (news) => {
    const params = new URLSearchParams(window.location.search);
 
    if (
        params.get('lang') === 'mk'
        || params.get('lang') === 'null'
        || !params.get('lang')
    ) {
        return news.titleMk;
    }

    return news.Title;
}

export const getNewsContent = (product) => {
    const params = new URLSearchParams(window.location.search);
 
    if (
        params.get('lang') === 'mk'
        || params.get('lang') === 'null'
        || !params.get('lang')
    ) {
        return product.contentMk;
    }

    return product.Content;
}