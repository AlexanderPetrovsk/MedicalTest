export const getProducts = async () => {
    let productsData = [];

    try {
        const res = await fetch('https://meditek-api.mk.meditek.com.mk/index.php/products');
        productsData = await res.json();
    } catch (e) {}

    return productsData.reverse();
}

export const getNews = async () => {
    let newsData = [];

    try {
        const newsRes = await fetch('https://meditek-api.mk.meditek.com.mk/index.php/news');
        newsData = await newsRes.json();
    } catch (e) {}

    return newsData.reverse();
}


export const getProductTitle = (product) => {
    const params = new URLSearchParams(window.location.search);
 
    if (params.get('lang') === 'mk' || params.get('lang') === 'null') {
        return product.titleMk;
    }

    return product.title;
}

export const getProductDescription = (product) => {
    const params = new URLSearchParams(window.location.search);
 
    if (params.get('lang') === 'mk'  || params.get('lang') === 'null') {
        return product.descriptionMk;
    }

    return product.description;
}


export const getNewsTitle = (news) => {
    const params = new URLSearchParams(window.location.search);
 
    if (params.get('lang') === 'mk' || params.get('lang') === 'null') {
        return news.titleMk;
    }

    return news.Title;
}

export const getNewsContent = (product) => {
    const params = new URLSearchParams(window.location.search);
 
    if (params.get('lang') === 'mk'  || params.get('lang') === 'null') {
        return product.contentMk;
    }

    return product.Content;
}