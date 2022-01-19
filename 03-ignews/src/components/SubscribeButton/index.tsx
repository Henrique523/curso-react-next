import styles from './styles.module.scss';
import {useCallback} from "react";
import {signIn, useSession} from "next-auth/react";
import {api} from "../../services/api";
import {getStripeJs} from "../../services/stripeJs";

interface SubscribeButtonProps {
    priceId: string;
}

// getServerSideProps (SSR) - ciclo de vida
// getStaticProps (SSG) - ciclo de vida
// API routes

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data: session } = useSession();

    const handleSubscribe = useCallback(async () => {
        if (!session) {
            signIn('github');
            return;
        }

        try {
            const response = await api.post('/subscribe');
            const { sessionId } = response.data;

            const stripe = await getStripeJs();
            await stripe.redirectToCheckout({ sessionId });
        } catch (e) {
            console.log(e);
            alert(e.message);
        }
    }, [session]);

    return (
        <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
            Subscribe now
        </button>
    );
}
