import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ title, open, setModalToggle }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setModalToggle(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [setModalToggle]);

	const closeModalHandler = () => {
		setModalToggle(false);
	};

	const dialogContentHandler = (event) => event.stopPropagation();

	return (
		<>
			{open && (
				<div className={styles.overlay} onClick={closeModalHandler}>
					<dialog className={styles.modal} open={open} id="modalAccept" onClick={dialogContentHandler}>
						<div className={styles.modalContent}>
							<button className={styles.modalClose} onClick={closeModalHandler} aria-label="Close Modal" type="button">✖</button>
							<h3 className={styles.modalTitle}>
								{title}
							</h3>
							<p className={styles.modalText}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum unde ipsam, et laboriosam tempora vitae illo obcaecati dignissimos, nulla distinctio ipsum aliquid aspernatur labore quo quas molestiae facere neque.
								Voluptas temporibus, repellat similique laudantium, et eius aspernatur earum odio vero veniam quaerat necessitatibus quo minima. Numquam in accusamus quibusdam sequi ipsum, saepe perspiciatis ex fuga ad, unde repudiandae fugit!
								Eaque veritatis iste et soluta repellendus similique, consectetur, deleniti vitae fugiat corrupti, ipsam porro quia eos doloribus ullam dolores tempore aliquam! Unde eum dolore consequuntur iure eveniet autem ad sit.
								Dicta minus ea blanditiis recusandae veniam quae similique, in quod! Nisi dignissimos, exercitationem eius quas eum sequi mollitia ullam dolorem nobis consectetur placeat hic expedita nesciunt deserunt at harum ex.
								Illum, explicabo reprehenderit neque cupiditate necessitatibus, a consequatur voluptates odio molestias perferendis ab error sunt cum modi vel magnam commodi repellat aspernatur. Similique nam tempore iure sed, iusto inventore ipsum?
								Corrupti omnis repellat beatae quisquam sed excepturi ipsa, dolores exercitationem voluptatem unde, dolor ullam rem repudiandae nostrum architecto cupiditate? Aperiam nemo dolorem ipsa magni quis tempora doloribus atque, sit odit.
								Iure architecto, sunt ex voluptatibus fuga odit modi, nemo sit ipsum voluptates repudiandae culpa? Ab alias expedita vero ipsum dolorem provident nostrum placeat quam, officia exercitationem fugit maiores ipsam earum.
								Rem repellat exercitationem ab neque, est vero eveniet explicabo ad velit delectus enim accusamus maxime vitae dolores quod praesentium molestias et sed saepe vel voluptatum. Blanditiis, libero. Consectetur, minima a.
								Cupiditate laborum deleniti porro? Officia dignissimos, natus cum cupiditate perferendis neque at harum voluptas pariatur blanditiis quasi quia debitis ipsam fuga? Quas, eos magni ducimus omnis libero consectetur quod culpa?
								Suscipit deleniti in atque dolore beatae error alias quasi eveniet, quia magnam itaque rerum aliquid fugiat excepturi earum expedita repudiandae iusto voluptate officia fuga, nobis modi provident. Dolorem, fugiat consectetur.
							</p>
						</div>
					</dialog>
				</div>
			)}
		</>
	);
};


Modal.propTypes = {
  title: PropTypes.string.isRequired,
	open: PropTypes.boolean,
	setModalToggle: PropTypes.func,
};
