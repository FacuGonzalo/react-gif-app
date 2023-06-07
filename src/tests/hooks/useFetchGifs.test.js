import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en hook useFetchGif', () => {

  test('Debe regresar el estado inicial', () => {

    const { result } = renderHook( () => useFetchGifs('Simpsons') );
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBe(true);
    
  });
  
  test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {

    const { result } = renderHook( () => useFetchGifs('Simpsons') );

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBe(false);

  });
  
})
