package Cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.junit.Cucumber;

/**
 * 
 * @author Usuario
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/Cucumber.Features"})
public class RunTest {
}