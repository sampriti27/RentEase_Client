import {
    RiseLoader
} from 'react-spinners';

interface IFullScreenLoader {
    message?: string;
}

const FullScreenLoader: React.FC<IFullScreenLoader> = ({ message = 'Loading...' }) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black-800 ">
            <div className="flex flex-col items-center justify-center gap-8">
                <RiseLoader
                    color="#0369a1" />
                <p className="text-[12px] md:text-[16px]">{message}</p>
            </div>
        </div>
    );
};

export default FullScreenLoader;