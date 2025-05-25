import {Button} from "antd";

export default function Home() {
    return (
        <div className="min-w-screen min-h-screen bg-background">
            <Button type="primary">
                Hello, Wold
            </Button>
            <button className="size-36 bg-primary">
                Hello, Tailwind
            </button>
        </div>
    );
}
