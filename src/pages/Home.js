const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 50px)',
  },
  title: {
    fontWeight: 500,
    fontSize: 60,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Your Personal PhoneBook</h1>
    </div>
  );
}
