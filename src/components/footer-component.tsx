const Footer = () => {
  return (
    <p className="p-4 text-center text-blue-300 dark:text-slate-100">
      <strong>Clokko Pomodoro</strong> - {new Date().getFullYear()} Todos os
      Direitos Reservados &copy;
    </p>
  );
};

export default Footer;
