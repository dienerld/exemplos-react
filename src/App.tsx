import { Theme } from 'react-daisyui';
import { HookForm } from './pages/hook-form';
import { List } from './pages/list/list';
import { QuizApp } from './pages/tmp';

function App() {
  return (
    <Theme>
      <List/>
      <HookForm/>
      <QuizApp/>
    </Theme>
  );
}

export default App;
