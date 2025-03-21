
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   


const ContactUs=()=>{
    return(
        <>
  <Typography className="text-center m-8 mb-3 text-sky-500 text-[30px]" variant="h4" color="blue-gray">
      Contact with the Website developer!
      </Typography>

     <Card className="m-auto w-[30%] mt-15 shadow-2xl shadow-sky-700" color="gray" shadow={false}>
    
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 m-auto">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Email address
          </Typography>
          <Input
          required
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 m-auto p-2"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Subject
          </Typography>
          <Input
          required
            size="lg"
            placeholder="Subject"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 m-auto p-2"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Message
          </Typography>
          <Input
          required
            type="text"
            size="lg"
            placeholder="Message"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-5 pb-8"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
       
        <Button className="mt-6 bg-sky-600 w-[50%]  p-2 text-center m-9   " >
         Send
        </Button>
        
      </form>
    </Card>
  
        </>
    )
}
export default ContactUs;