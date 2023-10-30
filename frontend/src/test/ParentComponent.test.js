import {render, screen, fireEvent} from "@testing-library/react";
import ParentComponent from "../components/ParentComponent";

describe("<ParentComponent />" , ()=>{
    test("updates the parent component text when the child component button is clicked", () => {
        render(<ParentComponent />);

        const inputElement = screen.getByRole('textbox');
        const submitButton = screen.getByRole('button', {name: /Submit/i });

        fireEvent.change(inputElement, {target: {value: "Hola Cesde"}});
        fireEvent.click(submitButton);

        const updatedText = screen.getByText(/Text: Hola Cesde/i);
        expect(updatedText).toBeInTheDocument();
    });
});



