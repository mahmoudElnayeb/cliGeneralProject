import { IProductPayload } from "../../modals/product.payload";

const mockProducts: IProductPayload[] = [
    {
      id: '1',
      title: 'Mock Product 1',
      price: 100,
      description: 'This is a mock product',
      categoryId: '',
      images: [{url:'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}]
    },
    {
      id: '2',
      title: 'Mock Product 2',
      price: 100,
      description: 'This is a mock product',
      categoryId: '',
      images: [{url:'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}]
    },
  ];

   export  const productMockResponses: Record<string, any> = {
    '/listings': {
      GET: () => new Promise((resolve) => {
        setTimeout(() => {
          resolve({ ok: true, data: mockProducts });
        }, 1000);
      }),
      POST: () => new Promise((resolve) => {
        setTimeout(() => {
          resolve({ ok: true, data: { id: '000' ,title: 'test mock' } });
        }, 1000);
      }),
    },
    // Add more endpoint mocks as needed
  };