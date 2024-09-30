import { EncoderHeading } from './EncoderHeading';
import { EncoderForm } from './EncoderForm';
// import { EncoderFooter } from './EncoderFooter';

export const EncoderControlsContainer = () => {
    return (
        <div className='flex flex-col items-center md:w-[50%] w-[80%] h-full'>
            <EncoderHeading />
            <EncoderForm />
            {/* <EncoderFooter /> */}
        </div>
    )
} 