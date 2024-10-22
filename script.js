// カテゴリー手数料データ
const categoryFees = {
    'メディア': {
        name: 'メディア - 本、DVD、ミュージック、PCソフト、ビデオ',
        fee: price => 0.15
    },
    'エレクトロニクス': {
        name: 'エレクトロニクス',
        fee: price => price <= 750 ? 0.05 : 0.08
    },
    'パソコン': {
        name: 'パソコン・周辺機器',
        fee: price => price <= 750 ? 0.05 : 0.08
    },
    '家電アクセサリ': {
        name: '家電アクセサリ',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    'Amazonデバイス': {
        name: 'Amazonデバイス用アクセサリ',
        fee: price => 0.45
    },
    '楽器・AV機器': {
        name: '楽器およびAV制作機器',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    'ドラッグストア': {
        name: 'ドラッグストア',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 1500) return 0.08;
            return 0.10;
        }
    },
    'ビューティ': {
        name: 'ビューティ',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 1500) return 0.08;
            return 0.10;
        }
    },
    '健康家電': {
        name: '健康家電・理美容家電',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    'スポーツ': {
        name: 'スポーツ&アウトドア',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    'カー&バイク': {
        name: 'カー&バイク用品',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    'タイヤ': {
        name: 'タイヤ',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    'おもちゃ': {
        name: 'おもちゃ&ホビー',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    'TVゲーム機': {
        name: 'TVゲーム機本体',
        fee: price => price <= 750 ? 0.05 : 0.08
    },
    'TVゲーム': {
        name: 'TVゲーム&ゲーム用アクセサリ',
        fee: price => 0.15
    },
    'ペット用品': {
        name: 'ペット用品',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 1500) return 0.08;
            return 0.15;
        }
    },
    '文房具': {
        name: '文房具・オフィス用品',
        fee: price => price <= 750 ? 0.05 : 0.15
    },
    'ホーム&キッチン': {
        name: 'ホーム&キッチン',
        fee: price => price <= 750 ? 0.05 : 0.15
    },
    'キッチン家電': {
        name: 'ホーム&キッチン家電',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    '浄水器': {
        name: '浄水器・整水器',
        fee: price => price <= 750 ? 0.05 : 0.10
    },
    '小型家電': {
        name: '小型家電',
        fee: price => price <= 750 ? 0.05 : 0.08
    },
    '大型家電': {
        name: '大型家電',
        fee: price => price <= 750 ? 0.05 : 0.08
    },
    '家具': {
        name: '家具',
        fee: price => price <= 750 ? 0.05 : 0.15
    },
    'マットレス': {
        name: 'マットレス',
        fee: price => price <= 750 ? 0.05 : 0.15
    },
    'DIY': {
        name: 'DIY・工具',
        fee: price => price <= 750 ? 0.05 : 0.15
    },
    '産業・研究開発': {
        name: '産業・研究開発用品',
        fee: price => price <= 750 ? 0.05 : 0.15
    },
    '医療用品': {
        name: '業務用医療用品',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 1500) return 0.08;
            return 0.10;
        }
    },
    '食品': {
        name: '食品&飲料',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 1500) return 0.08;
            return 0.10;
        }
    },
    'ビール': {
        name: 'ビール',
        fee: price => price <= 750 ? 0.05 : 0.065
    },
    '腕時計': {
        name: '腕時計',
        fee: price => price <= 750 ? 0.05 : 0.15
    },
    'ジュエリー': {
        name: 'ジュエリー',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 10000) return 0.10;
            return price => 0.10 + ((price - 10000) * 0.06);
        }
    },
    'ベビー': {
        name: 'ベビー&マタニティ',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 1500) return 0.08;
            return 0.15;
        }
    },
    'ファッション': {
        name: '服&ファッション小物',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 2500) return 0.08;
            if (price <= 3000) return 0.12;
            return price => 0.12 + ((price - 3000) * 0.08);
        }
    },
    'アイウェア': {
        name: 'アイウェア',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 3000) return 0.12;
            return price => 0.12 + ((price - 3000) * 0.08);
        }
    },
    'シューズ': {
        name: 'シューズ',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 7500) return 0.12;
            return price => 0.12 + ((price - 7500) * 0.06);
        }
    },
    'バッグ': {
        name: 'バッグ・トラベル用品',
        fee: price => {
            if (price <= 750) return 0.05;
            if (price <= 7500) return 0.12;
            return price => 0.12 + ((price - 7500) * 0.06);
        }
    },
    'その他': {
        name: 'その他のカテゴリー',
        fee: price => price <= 750 ? 0.05 : 0.15
    }
};
// FBA配送代行手数料データ
const fbaFees = {
    '小型_標準': {
        name: '小型(25×18×2.0cm以下, 250g以下)',
        fee: price => price > 1000 ? 288 : 222
    },
    '標準_1': {
        name: '標準1(35×30×3.3cm以下, 1kg以下)',
        fee: price => price > 1000 ? 318 : 252
    },
    '標準_2': {
        name: '標準2(20cm以下)',
        fee: price => price > 1000 ? 413 : 347
    },
    '標準_3': {
        name: '標準3(30cm以下)',
        fee: price => price > 1000 ? 434 : 368
    },
    '標準_4': {
        name: '標準4(40cm以下, 2kg以下)',
        fee: price => price > 1000 ? 455 : 389
    },
    '標準_5': {
        name: '標準5(50cm以下)',
        fee: price => price > 1000 ? 465 : 399
    },
    '標準_6': {
        name: '標準6(60cm以下)',
        fee: price => price > 1000 ? 485 : 419
    },
    '標準_7': {
        name: '標準7(80cm以下, 5kg以下)',
        fee: price => price > 1000 ? 514 : 448
    },
    '標準_8': {
        name: '標準8(100cm以下, 9kg以下)',
        fee: price => price > 1000 ? 603 : 537
    },
    '大型_1': {
        name: '大型1(60cm以下, 2kg以下)',
        fee: price => price > 1000 ? 589 : 523
    },
    '大型_2': {
        name: '大型2(80cm以下, 5kg以下)',
        fee: price => price > 1000 ? 712 : 646
    },
    '大型_3': {
        name: '大型3(100cm以下, 10kg以下)',
        fee: price => price > 1000 ? 815 : 749
    },
    '大型_4': {
        name: '大型4(120cm以下, 15kg以下)',
        fee: price => price > 1000 ? 975 : 909
    },
    '大型_5': {
        name: '大型5(140cm以下, 20kg以下)',
        fee: price => price > 1000 ? 1020 : 954
    },
    '大型_6': {
        name: '大型6(160cm以下, 25kg以下)',
        fee: price => price > 1000 ? 1100 : 1034
    },
    '大型_7': {
        name: '大型7(180cm以下, 30kg以下)',
        fee: price => price > 1000 ? 1532 : 1466
    },
    '大型_8': {
        name: '大型8(200cm以下, 40kg以下)',
        fee: price => price > 1000 ? 1756 : 1690
    },
    '特大_1': {
        name: '特大1(200cm以下, 50kg以下)',
        fee: price => price > 1000 ? 2755 : 2689
    },
    '特大_2': {
        name: '特大2(220cm以下, 50kg以下)',
        fee: price => price > 1000 ? 3573 : 3507
    },
    '特大_3': {
        name: '特大3(240cm以下, 50kg以下)',
        fee: price => price > 1000 ? 4496 : 4430
    },
    '特大_4': {
        name: '特大4(260cm以下, 50kg以下)',
        fee: price => price > 1000 ? 5625 : 5559
    }
};
document.addEventListener('DOMContentLoaded', function() {
    // 先ほど実装したcategoryFeesとfbaFeesのコードをここに配置
    // （長さの関係で省略していますが、実際には上記のコードが入ります）

    function initializeSelects() {
        ['1', '2'].forEach(num => {
            const categorySelect = document.getElementById(`category${num}`);
            const fbaSelect = document.getElementById(`fbaSize${num}`);

            // カテゴリープルダウンの設定
            categorySelect.innerHTML = '<option value="">カテゴリーを選択してください</option>';
            Object.entries(categoryFees).forEach(([key, value]) => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = value.name;
                categorySelect.appendChild(option);
            });

            // FBAサイズプルダウンの設定
            fbaSelect.innerHTML = '<option value="">サイズを選択してください</option>';
            Object.entries(fbaFees).forEach(([key, value]) => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = value.name;
                fbaSelect.appendChild(option);
            });
        });
    }

    // 利益計算関数
    function calculateProfit(pattern) {
        const purchasePrice = parseFloat(document.getElementById(`purchasePrice${pattern}`).value) || 0;
        const sellingPrice = parseFloat(document.getElementById(`sellingPrice${pattern}`).value) || 0;
        const selectedCategory = document.getElementById(`category${pattern}`).value;
        const selectedFbaSize = document.getElementById(`fbaSize${pattern}`).value;

        if (!selectedCategory || !selectedFbaSize || sellingPrice <= 0) {
            document.getElementById(`profit${pattern}`).textContent = '0円';
            document.getElementById(`profitRate${pattern}`).textContent = '0%';
            return;
        }

        // カテゴリー手数料の計算
        const categoryFeeRate = categoryFees[selectedCategory].fee(sellingPrice);
        const categoryFeeAmount = sellingPrice * categoryFeeRate;

        // FBA手数料の計算
        const fbaFeeAmount = fbaFees[selectedFbaSize].fee(sellingPrice);

        // 手数料の表示更新
        document.getElementById(`feeDisplay${pattern}`).innerHTML = 
            `カテゴリー手数料: ${(categoryFeeRate * 100).toFixed(1)}%<br>` +
            `(${Math.round(categoryFeeAmount).toLocaleString()}円)`;
        
        document.getElementById(`fbaFeeDisplay${pattern}`).textContent = 
            `FBA手数料: ${Math.round(fbaFeeAmount).toLocaleString()}円`;

        // 利益の計算
        const profit = sellingPrice * (1 - categoryFeeRate) - fbaFeeAmount - purchasePrice;
        const profitRate = (profit / sellingPrice) * 100;

        // 結果の表示
        document.getElementById(`profit${pattern}`).textContent = 
            `${Math.round(profit).toLocaleString()}円`;
        document.getElementById(`profitRate${pattern}`).textContent = 
            `${profitRate.toFixed(1)}%`;

        // 利益がマイナスの場合は赤字表示
        const profitElement = document.getElementById(`profit${pattern}`);
        const profitRateElement = document.getElementById(`profitRate${pattern}`);
        
        if (profit < 0) {
            profitElement.style.color = '#ff4444';
            profitRateElement.style.color = '#ff4444';
        } else {
            profitElement.style.color = '#2c3e50';
            profitRateElement.style.color = '#2c3e50';
        }
    }

    // イベントリスナーの設定
    function setupEventListeners() {
        ['1', '2'].forEach(pattern => {
            ['purchasePrice', 'sellingPrice', 'category', 'fbaSize'].forEach(field => {
                document.getElementById(`${field}${pattern}`).addEventListener('input', () => {
                    calculateProfit(pattern);
                });
            });
        });
    }

    // 初期化処理
    initializeSelects();
    setupEventListeners();
});
