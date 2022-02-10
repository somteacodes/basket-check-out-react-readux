import { screen, render } from "@testing-library/react"
 import {Button} from './Button'

 

it("renders button correctly", ()=>{
     render(
       <Button onClick={function (): void {
           throw new Error("Function not implemented.")
       } } background={""} color={""}>
           Test me
       </Button>
   )
   expect(screen.getByTestId('button')).toHaveTextContent("Test me")
})
