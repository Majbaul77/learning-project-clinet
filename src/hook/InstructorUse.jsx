import { useQuery } from '@tanstack/react-query';

const InstructorUse = () => {
    const { data: users = [], isLoading: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://languages-center-server.vercel.app/users');
            return res.json()
           
        }

    })

    return [users, loading]

};

export default InstructorUse;