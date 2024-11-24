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
      GET: () => ({ ok: true, data: mockProducts }),
      POST: (body: any) => {
        console.log('Received POST data:', body);
        return { ok: true, data: { ...body, id: Date.now().toString() } };
       
      },
    },
    // Add more endpoint mocks as needed
  };