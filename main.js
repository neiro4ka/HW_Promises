const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsList {
    // ...

    fetchGoods(url, cb) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = () => resolve(cb(xhr.responseText));
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        })
    }

    render() {
        let listHtml = '' ;
        this .goods.forEach(good => {
        const goodItem = new GoodsItem(good.product_name, good.price);
        listHtml += goodItem.render();
    });
    document .querySelector( '.goods-list' ).innerHTML = listHtml;
    }
    }

    const list = new GoodsList();
    list.fetchGoods(() => {
        list.render();
    });