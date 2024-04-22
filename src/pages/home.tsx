import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

function Home() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Welcome</CardTitle>
                <CardDescription>Build your awesome app!</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Button</Button>
            </CardFooter>
        </Card>
    );
}

export default Home;
