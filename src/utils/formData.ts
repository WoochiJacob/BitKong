interface IItem {
    value: string;
    name: string;
    id: number;
}

export interface IFormData {
    title: string,
    label: string,
    form: string,
    type: string,
    required: boolean,
    minLength: number,
    maxLength: number,
    placeholder: string,
    items: IItem[] | null,
}

export const FormData: IFormData[] = [
    {
        title: '카테고리',
        label: 'category',
        form: 'select',
        type: 'text',
        required: true,
        minLength: 1,
        maxLength: 1000000000,
        placeholder: '상품 카테고리 선택',
        items: [
            {
                id: 1,
                value: '구매',
                name: '구매',
            },
            {
                id: 2,
                value: '판매',
                name: '판매',
            },
        ],
    },
    {
        title: '제목',
        label: 'title',
        form: 'input',
        type: 'text',
        required: true,
        minLength: 1,
        maxLength: 20,
        placeholder: '제목(상품명)을 입력해 주세요.',
        items: null,
    },
    {
        title: '가격',
        label: 'price',
        form: 'input',
        type: 'text',
        required: true,
        minLength: 1,
        maxLength: 12,
        placeholder: '가격을 입력해 주세요.',
        items: null,
    },
    {
        title: '휴대폰 번호',
        label: 'phone',
        form: 'input',
        type: 'text',
        required: true,
        minLength: 1,
        maxLength: 11,
        placeholder: '휴대폰 번호를 입력해주세요.',
        items: null,
    },
    {
        title: '구매가능 코인',
        label: 'coin',
        form: 'radio',
        type: 'radio',
        required: true,
        minLength: 0,
        maxLength: 1000000000,
        placeholder: '',
        items: [
            {
                id: 1,
                value: '비트코인(BTC)',
                name: 'coin',
            },
            {
                id: 2,
                value: '이더리움(ETH)',
                name: 'coin',
            },
            {
                id: 3,
                value: '리플(XRP)',
                name: 'coin',
            },
            {
                id: 4,
                value: '테더(USDT)',
                name: 'coin',
            },
            {
                id: 5,
                value: '그 외',
                name: 'coin',
            },
        ],
    },
    {
        title: '판매 물품 소개',
        label: 'contents',
        form: 'textarea',
        type: 'text',
        required: true,
        minLength: 1,
        maxLength: 3000,
        placeholder: '제품에 대한 설명을 작성해 주세요.',
        items: null,
    },
];
