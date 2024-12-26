import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2d2d2d',
  lightGray: '#9b9b9b',
  orange: '#ff9427',

  textPrimary: '#ffffff',
  textSecondary: '#666666',
  background: '#000000',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },
  submainResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '200',
  },
  botton: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttoText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: colors.textPrimary,
    fontWeight: '300',
  },
});
