import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";
import { screen } from "@testing-library/dom";

describe("Prueba sobre <GifItem />", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";

  test("Debe mostrar el componente correctamente", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    
    expect(container).toMatchSnapshot();
  });

  test("Debe mostar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByRole("img").src).toBe(url);
    expect(screen.getByRole("img").alt).toBe(title);
  });

  test("Debe mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
