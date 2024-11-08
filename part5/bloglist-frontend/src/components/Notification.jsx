const Notification = ({color, msg}) => {

    const styles = {
        border: `2px solid ${color}`, // Borde del color que recibimos
        borderRadius: '8px',          // Bordes redondeados
        height: '80px',               // Altura fija
        color: color,                 // Texto del color que recibimos
        display: 'flex',              // Para centrar el texto vertical y horizontalmente
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '16px'
    };
    

    return (
        <>
        <div style={styles}>
            {msg}
        </div>
        </>
    )
}
export {Notification}