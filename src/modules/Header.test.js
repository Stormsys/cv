import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

test("the print contact is complete before and after revealing the screen email", () => {
  const { container } = render(<Header />);
  const printLink = container.querySelector('.contact-email-print');
  expect(printLink).toHaveAttribute('href', 'mailto:diogo@stormsys.net');
  expect(printLink).toHaveTextContent('diogo@stormsys.net');
  fireEvent.click(screen.getByRole('button', {name:'Reveal email ↗'}));
  expect(container.querySelector('.contact-email-screen')).toHaveAttribute('href', 'mailto:diogo@stormsys.net');
  expect(container.querySelectorAll('.contact-email-print')).toHaveLength(1);
});
