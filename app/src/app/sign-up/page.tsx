import Image from "next/image"
import { TextInput } from "../components/input/input/textfield"
import { Button } from "../components/input/button/button"
import { ImgButton } from "../components/input/button/buttonImg"


export default function SignUp(){
    return (
        <div className="bg-off-white flex flex-row items-center justify-center p-10 gap-48 h-screen ">
            
            {/* image container */}
            <div className="p-5 flex flex-col justify-center item-center z-10">
                <Image src="/form-icon.png" width={400} height={400} alt="form-icon"></Image>
            </div>
            {/* Form */}
            <div className="container px-14 bg-white gap-3 rounded-3xl flex flex-col item-center justify-center w-[500px] h-[600px] z-10">
                <h2 className="font-bold text-4xl text-black relative top-0">Register</h2>
                <h4 className="font-semibold text-gray-600 text-sm">Email</h4>
                <TextInput placeholder="Enter your email"></TextInput>
                <h4 className="font-semibold text-gray-600 text-sm">Password</h4>
                <TextInput placeholder="Enter your password"></TextInput>
                <h4 className="font-semibold text-gray-600 text-sm">Confirm Your Password</h4>
                <TextInput placeholder="Enter your password again"></TextInput>
                <p className="text-xs font-semibold text-black">Already have an account? <a className="text-ocean-600 hover:text-ocean=400" href="">Sign in</a> </p>
                <div className="flex flex-row items-centerr justify-start gap-2">
                    <input type="checkbox" name="" id="" />
                    <p className="text-xs font-semibold text-black">By signing up, I agree to term of use of NihonggO</p>
                </div>
                <Button classname="px-4 w-96 py-2 rounded-full">Sign in</Button>
                <div className="flex flex-row items-center gap-2 justify-center">
                    <div className="h-[1px] w-[110px] bg-gray-600"></div>
                    <p className="p-0 text-sm font-semibold text-gray-600">or continue with</p>
                    <div className="h-[1px] w-[110px] bg-gray-600"></div>
                </div>
                <div className="flex flex-row justify-center gap-3">
                    <ImgButton icon="/google.svg" classname="justify-between rounded-xl px-8 py-3 gap-5" >Google</ImgButton>
                    <ImgButton icon="/apple.svg" classname="justify-between rounded-xl px-8 py-3 gap-5" >Apple</ImgButton>
                </div>
            </div>
            {/* bg */}
            <div className="h-96 w-screen absolute top-0 z-0 bg-gray-200"></div>
        </div>
    )
}